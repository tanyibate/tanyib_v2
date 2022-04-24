import React from "react";
import styles from "./portfolio-card-styles.module.scss";

export type Project = {
  image: string;
  title: string;
  description: string;
  url: string;
};

type PortfolioCardProps = {
  project: Project;
};

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <a
      className={styles.card_container}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={styles.card} src={project.image} alt={project.title} />
      <div className={styles.description}>
        <h4 className={styles.title}>{project.title}</h4>
        <p className={styles.about}>{project.description}</p>
      </div>
    </a>
  );
}
