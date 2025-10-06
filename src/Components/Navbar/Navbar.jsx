import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Portfolio</div>

      {/* Nav Links */}
      <ul
        className={`${styles.navLinks} ${
          isOpen ? styles.navLinksActive : ""
        }`}
      >
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
