import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ownerAddress } from "../config";
import "easymde/dist/easymde.min.css";
import { AccountContext } from "../context";
import { useContext } from "react";

export default function Navbar() {
  const [ham, setHam] = useState(true);
  const { account, setAccount } = useContext(AccountContext);

  const toggleMenu = () => {
    setHam(!ham);
  };

  async function getWeb3Modal() {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "05cb8ebfc5454054abc6efc2c933d33b",
          },
        },
      },
    });
    return web3Modal;
  }

  async function connect() {
    try {
      const web3Modal = await getWeb3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const accounts = await provider.listAccounts();
      setAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <nav className="navbar">
        <div className="brand-title">
          <Link href="/" passHref>
            <Image
              className="logo"
              src="https://globalbc.io/447ebdff5b24b7e2a429e092ba5efd44.svg"
              width="200"
              height="50"
              alt="logo"
            ></Image>
          </Link>
        </div>
        <a href="#" className="toggle-button" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={`navbar-links ${ham ? "" : "active"}`}>
          <ul>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            {account === ownerAddress ? (
              <li>
                <Link href="/forum">Post</Link>
              </li>
            ) : (
              <li>
                <Link href="/forum">Forum</Link>
              </li>
            )}
            {account ? (
              <li>
                <a>{account.slice(0, 4) + "..." + account.slice(-4)}</a>
              </li>
            ) : (
              <li>
                <a href="#" onClick={connect}>
                  Connect
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
