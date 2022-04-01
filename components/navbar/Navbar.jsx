import React from "react";
import Button from "../button/Button";
import styles from "./navbar-styles.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav>
        <h3 className={styles.logo}>b.tanyi</h3>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <Button>Resume</Button>
        </div>
        <div className="lg:hidden">Burger</div>
      </nav>
    </header>
  );
}
