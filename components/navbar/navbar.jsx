import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import DarkMode from "../darkMode/darkMode";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.title}>
        Ulas.dev
      </Link>

      <div className={styles.links}>
        <DarkMode />
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/projects">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
