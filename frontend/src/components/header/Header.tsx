
import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Tidslinjeprojekt</h1>
      <nav className={styles.navbar}>
        <a href="/" className={styles.navBtn}>Hem</a>
        <a href="/about" className={styles.navBtn}>Om</a>
        <a href="/contact" className={styles.navBtn}>Kontakt</a>
      </nav>
    </header>
  );
};

export default Header;
