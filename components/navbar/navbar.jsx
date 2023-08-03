import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.title}>
        Ulas.dev
      </Link>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
