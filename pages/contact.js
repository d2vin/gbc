import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className={styles.socialMedia}>
        <ul className={styles.sci}>
          <li data-text="LinkedIn" className={styles.linkedin}>
            <Link
              href="https://www.linkedin.com/company/global-blockchain-convergence"
              passHref
            >
              <FaLinkedin />
            </Link>
          </li>
          <li data-text="Discord" className={styles.discord}>
            <Link href="https://discord.gg/UjAEEffRs6" passHref>
              <FaDiscord />
            </Link>
          </li>
          <li data-text="Twitter" className={styles.twitter}>
            <Link href="https://twitter.com/globalbcio" passHref>
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
