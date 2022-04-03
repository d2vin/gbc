import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [ham, setHam] = useState(true);

  const toggleMenu = () => {
    setHam(!ham);
  };

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
          </ul>
        </div>
      </nav>
    </div>
  );
}
