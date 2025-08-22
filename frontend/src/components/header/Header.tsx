import React from "react";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";

type HeaderProps = {
  themes: string[];
  onSelectTheme: (theme: string) => void;
};

const Header: React.FC<HeaderProps> = ({ themes, onSelectTheme }) => {
  return (
    <header className={styles.header}>
      <h1>Tidslinjeprojekt</h1>
      <Navbar themes={themes} onSelectTheme={onSelectTheme} />
    </header>
  );
};

export default Header;
