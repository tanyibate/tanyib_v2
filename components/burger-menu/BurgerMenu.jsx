import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./burger-menu-styles.module.scss";
import classNames from "classnames";

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
        <a href="#about" onClick={activateBurgerMenu}>
          About
        </a>
        <a href="#services" onClick={activateBurgerMenu}>
          Experience
        </a>
        <a href="#work" onClick={activateBurgerMenu}>
          Work
        </a>
        <a href="#contact" onClick={activateBurgerMenu}>
          Contact
        </a>
        <Button>Resume</Button>
      </div>

      <button className={burgerClasses} onClick={activateBurgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
