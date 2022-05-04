import React from "react";
import styles from "./service-card-styles.module.scss";

export type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className={styles.service_card_container}>
      <div className="w-full h-full relative">
        <div className={styles.overlay_background}></div>
        <div className={styles.details}>
          <img src={image} alt={title + " icon"} />
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.line}></div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
