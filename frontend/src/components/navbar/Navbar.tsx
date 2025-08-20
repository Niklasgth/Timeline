import React from "react";
import styles from "./Navbar.module.css";

type NavbarProps = {
  themes: string[];
  onSelectTheme: (theme: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ themes, onSelectTheme }) => {
  return (
    <nav className={styles.navbar}>
  <div className={styles.dropdown}>
    <button className={styles.navBtn}>Välj tema</button>
    <div className={styles.dropdownContent}>
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => onSelectTheme(theme)}
          className={styles.navBtn}
        >
          {theme}
        </button>
      ))}
    </div>
  </div>
</nav>
  );
};

export default Navbar;
