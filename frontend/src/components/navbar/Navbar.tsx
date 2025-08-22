import React from "react";
import styles from "./Navbar.module.css";

type NavbarProps = {
  themes: string[];
  onSelectTheme: (theme: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ themes, onSelectTheme }) => {
  return (
    <nav className={styles.navbar}>
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => onSelectTheme(theme)}
          className={styles.navBtn}
        >
          {theme}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
