import React from "react";
import styles from "./portfolio-card-styles.module.scss";

export type Project = {
  image: string;
  title: string;
  description: string;
};

type PortfolioCardProps = {
  project: Project;
};

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className={styles.card_container}>
      <img className={styles.card} src={project.image} alt={project.title} />
      <div className={styles.description}>
        <h4 className={styles.title}>{project.title}</h4>
        <p className={styles.about}>{project.description}</p>
      </div>
    </div>
  );
}
