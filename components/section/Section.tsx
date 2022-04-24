import React from "react";
import styles from "./section-styles.module.scss";
import classNames from "classnames";

export type SectionProps = {
  children: React.ReactNode;
  id: string;
  backgroundColour: "light" | "dark";
  backgroundImages: boolean;
};

export default function Section({
  children,
  id,
  backgroundColour,
  backgroundImages,
}: SectionProps) {
  const classes = classNames({
    [styles.container]: true,
    [styles.light_background]: backgroundColour === "light",
    [styles.dark_background]: backgroundColour === "dark",
    [styles.background_images]: backgroundImages === true,
  });
  return (
    <section className={classes} id={id}>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
