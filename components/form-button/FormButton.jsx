import React from "react";
import styles from "./button-styles.module.scss";

export default function FormButton({ children }) {
  return <button className={styles.button}>{children}</button>;
}
