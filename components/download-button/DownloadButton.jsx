import React from "react";
import styles from "./button-styles.module.scss";

export default function DownloadButton({ href, children }) {
  return (
    <a className={styles.button} href={href} target="_blank" download>
      {children}
    </a>
  );
}
