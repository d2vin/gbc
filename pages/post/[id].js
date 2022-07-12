import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { css } from "@emotion/css";
import { ethers } from "ethers";
import { AccountContext } from "../../context";
import Navbar from "../../components/Navbar";
import { contractAddress, ownerAddress } from "../../config";
import Image from "next/image";

import Blog from "../../artifacts/contracts/Blog.sol/Blog.json";

const ipfsURI = "https://ipfs.io/ipfs/";

export default function Post({ post }) {
  const account = useContext(AccountContext);
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallBack) {
    return <div>Loading...</div>; // if we run a build and someone creates a new post, a fallback page will be rendered while data is being fetched
  }

  return (
    <div>
      <Navbar />
      {post && (
        <div className={container}>
          {ownerAddress === account && (
            <div className={editPost}>
              <Link href={`/edit-post/${id}`}>
                <a>Edit Post</a>
              </Link>
            </div>
          )}
          {
            // if the post has a cover image, render it
            post.coverImage && (
              <Image
                width={400}
                height={400}
                src={post.coverImage}
                alt="Cover image"
                className={coverImageStyle}
              />
            )
          }
          <h1>{post.title}</h1>
          <div className={contentContainer}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  // blog posts
  let provider;
  if (process.env.ENVIRONMENT === "local") {
    provider = new ethers.providers.JsonRpcProvider();
  } else if (process.env.ENVIRONMENT === "testnet") {
    provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.matic.today"
    );
  } else {
    provider = new ethers.providers.JsonRpcProcider("https://polygon-rpc.com/");
  }

  const contract = new ethers.Contract(contractAddress, Blog.abi, provider);
  const data = await contract.fetchPosts();

  const paths = data.map((d) => ({ params: { id: d[2] } }));
  // post = [title, content, id]
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // params = { id: "post-id" }
  // id is going to be the hash of the post for ipfs
  const { id } = params;
  const ipfsUrl = `${ipfsURI}/${id}`;
  const response = await fetch(ipfsUrl);
  const data = await response.json();
  if (data.coverImage) {
    let coverImage = `${ipfsURI}/${data.coverImage}`;
    data.coverImage = coverImage;
  }
  // data = { id, coverImage, content}
  return {
    props: {
      post: data,
    },
  };
}

const container = css`
  width: 900px;
  margin: 0 auto;
`;

const editPost = css`
  margin: 20px 0px;
`;

const coverImageStyle = css`
  width: 900px;
`;

const contentContainer = css`
  margin-top: 60px;
  padding: 0px 40px;
  border-left: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
  & img {
    max-width: 900px;
  }
`;
