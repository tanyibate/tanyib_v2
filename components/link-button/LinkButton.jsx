import React from "react";
import styles from "./button-styles.modules.scss";

export default function LinkButton({ href, children }) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
}
