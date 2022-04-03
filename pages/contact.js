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
            <Link href="#" passHref>
              <FaLinkedin />
            </Link>
          </li>
          <li data-text="Discord" className={styles.discord}>
            <Link href="#" passHref>
              <FaDiscord />
            </Link>
          </li>
          <li data-text="Twitter" className={styles.twitter}>
            <Link href="#" passHref>
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
