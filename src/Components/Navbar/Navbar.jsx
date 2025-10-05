import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Portfolio</div>

      {/* Desktop Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;
