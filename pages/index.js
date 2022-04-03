import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2>Purpose</h2>
            <p>
              To advance adoption of blockchain technologies by fostering
              organic opportunities for collaboration across diverse segments of
              the global ecosystem.
            </p>
            <Link href="/contact">Learn More</Link>
          </div>
        </div>
        <div className={styles.box}>
          <span></span>
          <div className={styles.content}>
            <h2>How we do it</h2>
            <p>
              The GBC monthly meetings is where members utilize their community
              to develop networks, educate, and bring new ideas to the
              blockchain space.
            </p>
            <Link href="/events">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
