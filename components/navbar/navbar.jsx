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
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/projects">
          Projects
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
