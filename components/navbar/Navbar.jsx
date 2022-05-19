import React, { useState, useEffect } from "react";
import BurgerMenu from "../burger-menu/BurgerMenu";
import DownloadButton from "../download-button/DownloadButton";
import styles from "./navbar-styles.module.scss";
import classNames from "classnames";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarClasses = classNames({
    [styles.navbar]: true,
    [styles.darken]: scrollPosition > 0,
  });
  return (
    <header className={navBarClasses}>
      <nav>
        <h3 className={styles.logo}>b.tanyi</h3>
        <div className={styles.links}>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#services" className={styles.link}>
            Services
          </a>
          <a href="#portfolio" className={styles.link}>
            Portfolio
          </a>
          <a href="#contact" className={styles.link}>
            Contact Me
          </a>
          <DownloadButton href="/assets/batetambe_tanyi.pdf">
            Resume
          </DownloadButton>
        </div>
        <div className="lg:hidden">
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
}
