import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("menu-open");
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
        <li><a href="#experience" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;
