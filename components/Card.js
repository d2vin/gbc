import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styles from "../styles/Team.module.css";
import Link from "next/link";
import Tilt from "react-vanilla-tilt";

const Card = (props) => {
  return (
    <div>
      <Tilt className={styles.tilt} style={{}}>
        <section>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.imgbox}>
                  <Image
                    className={styles.img}
                    width="200px"
                    height="200px"
                    src={`/../public/${props.image}.jpg`}
                    alt=""
                  />
                </div>
                <div className={styles.box}>
                  <h2>
                    {props.name}
                    <br />
                    <span>{props.company}</span>
                  </h2>
                </div>
              </div>
              <ul className={styles.sci}>
                <li>
                  <div className={styles.centered}>
                    <Link href="#" passHref>
                      <FaLinkedin />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className={styles.centered}>
                    <Link href="#" passHref>
                      <FaLinkedin />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className={styles.centered}>
                    <Link href="#" passHref>
                      <FaLinkedin />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Tilt>
    </div>
  );
};

export default Card;
