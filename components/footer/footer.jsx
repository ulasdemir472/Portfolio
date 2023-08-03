"use client";
import React from "react";
import styles from "./page.module.css";
import { EnvelopeSimple } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <EnvelopeSimple size={24} />
      <p className={styles.mail}>ulasdemir472@gmail.com</p>
    </footer>
  );
};

export default Footer;
