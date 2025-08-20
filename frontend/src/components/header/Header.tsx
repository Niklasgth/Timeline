// Header.tsx
import React from "react";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar"; // importerar dropdown-navbar 

type HeaderProps = {
  themes: string[];
  onSelectTheme: (theme: string) => void;
};

const Header: React.FC<HeaderProps> = ({ themes, onSelectTheme }) => {
  return (
    <header className={styles.header}>
      <h1>Tidslinjeprojekt</h1>
      <nav className={styles.navbar}>
        <a href="/" className={styles.navBtn}>Hem</a>
        <a href="/about" className={styles.navBtn}>Om</a>
        <a href="/contact" className={styles.navBtn}>Kontakt</a>
        <Navbar themes={themes} onSelectTheme={onSelectTheme} />
      </nav>
    </header>
  );
};

export default Header;
