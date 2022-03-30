import React from "react";
import styles from "./button-styles.module.scss";

export default function Button({ fn, children }) {
  return (
    <button onClick={fn} className={styles.button}>
      {children}
    </button>
  );
}
