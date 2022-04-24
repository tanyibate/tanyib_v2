import React from "react";
import styles from "./portfolio-gallery-styles.module.scss";
import PortfolioCard from "../portfolio-card/PortfolioCard";
import { Project } from "../portfolio-card/PortfolioCard";

export type PortfolioGalleryProps = {
  projects: Project[];
  title: string;
};

export default function PortfolioGallery({
  projects,
  title,
}: PortfolioGalleryProps) {
  return (
    <div className="w-full  h-full flex flex-col space-y-6 justify-betweenas">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <div className="flex space-x-6">
          <img
            src="/assets/arrow-circle-right.svg"
            alt="previous project button"
            className="cursor-pointer"
          />
          <img
            src="/assets/arrow-circle-right.svg"
            alt="next project button"
            className="cursor-pointer"
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </div>
      </div>

      <div className={styles.slider_container}>
        <div className={styles.slider}>
          {projects.map((project) => {
            return (
              <PortfolioCard
                {...{
                  project: project,
                }}
                key={project.title}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className={styles.pagination}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <img src="/assets/chevron.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
