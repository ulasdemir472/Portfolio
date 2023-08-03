"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Front-End React Developer <span className={styles.emoji}>👋</span>
          </h1>
          <p className={styles.desc}>
            Hi.I'm Ulaş Demir.A passionate Front-End React Developer based in
            Istanbul,Turkey.
          </p>
          <div className={styles.link}>
            <Link
              className={styles.linkedin}
              href="https://www.linkedin.com/in/ula%C5%9F-demir-788006228/"
            >
              <LinkedinLogo size={32} />
            </Link>
            <Link
              className={styles.github}
              href="https://github.com/ulasdemir472"
            >
              <GithubLogo size={32} />
            </Link>
          </div>
        </div>
        <Image
          className={styles.image}
          src="/profil.jpg"
          alt="profil"
          width={300}
          height={300}
        />
      </div>
      <div className={styles.footer}>
        <p className={styles.footTitle}>Tech Stack |</p>
        <div className={styles.images}>
          <Image
            className={styles.logo}
            src="/html.png"
            alt="html"
            width={40}
            height={40}
          />
          <Image
            className={styles.logo}
            src="/css.png"
            alt="css"
            width={40}
            height={40}
          />
          <Image
            className={styles.logo}
            src="/js.png"
            alt="js"
            width={40}
            height={40}
          />
          <Image
            className={styles.logo}
            src="/react.png"
            alt="react"
            width={40}
            height={40}
          />
          <Image
            className={styles.logo}
            src="/next.png"
            alt="next"
            width={40}
            height={40}
          />
        </div>
      </div>
    </section>
  );
}
