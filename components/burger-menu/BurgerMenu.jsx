import React, { useState } from "react";
import DownloadButton from "../download-button/DownloadButton";
import styles from "./burger-menu-styles.module.scss";
import classNames from "classnames";
import Hamburger from "hamburger-react";

export default function BurgerMenu() {
  const [isMounted, setIsMounted] = useState(false);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const activateBurgerMenu = () => {
    if (!isMounted) {
      setIsMounted(true);
      setBurgerMenuActive(!burgerMenuActive);
    } else setBurgerMenuActive(!burgerMenuActive);
  };
  const burgerClasses = classNames({
    [styles.burger]: true,
    [styles.open]: burgerMenuActive,
    [styles.close]: !burgerMenuActive && isMounted,
  });

  const menuClasses = classNames({
    [styles.menu]: true,
    [styles.slide]: burgerMenuActive,
    [styles.slide_back]: !burgerMenuActive && isMounted,
  });
  return (
    <div className="relative">
      <div className={menuClasses}>
        <a href="#about" onClick={activateBurgerMenu} className={styles.link}>
          About
        </a>
        <a
          href="#services"
          onClick={activateBurgerMenu}
          className={styles.link}
        >
          Services
        </a>
        <a
          href="#portfolio"
          onClick={activateBurgerMenu}
          className={styles.link}
        >
          Portfolio
        </a>
        <a href="#contact" onClick={activateBurgerMenu} className={styles.link}>
          Contact Me
        </a>
        <DownloadButton href="/assets/batetambe_tanyi.pdf">
          Resume
        </DownloadButton>
      </div>
      <div className={styles.burger}>
        <Hamburger
          onToggle={activateBurgerMenu}
          toggled={burgerMenuActive}
          color={burgerMenuActive ? "#64ffda" : "#ffffff"}
        />
      </div>
    </div>
  );
}
