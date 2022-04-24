import React, { useState } from "react";
import styles from "./portfolio-gallery-styles.module.scss";
import PortfolioCard from "../portfolio-card/PortfolioCard";
import { Project } from "../portfolio-card/PortfolioCard";
import classNames from "classnames";

export type PortfolioGalleryProps = {
  projects: Project[];
  title: string;
};

export default function PortfolioGallery({
  projects,
  title,
}: PortfolioGalleryProps) {
  const initialiseProjects = (projects: Project[]): Project[] => {
    const newProjects = [...projects];
    const lastProject = newProjects.pop();
    newProjects.unshift(lastProject);
    return newProjects;
  };

  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const [previousButtonClicked, setPreviousButtonClicked] = useState(false);
  const [sliderProjects, setSliderProjects] = useState(
    initialiseProjects(projects)
  );

  const sliderClasses = classNames({
    [styles.slider]: true,
    [styles.slide_left]: nextButtonClicked,
    [styles.slide_right]: previousButtonClicked,
  });

  const sliderController = (): void => {
    if (nextButtonClicked) restructureSliderProjectsOnNextButton();
    else restructureSliderProjectsOnPreviousButton();
  };

  const restructureSliderProjectsOnNextButton = (): void => {
    setNextButtonClicked(false);
    const projects = [...sliderProjects];
    const firstProject = projects.shift();
    projects.push(firstProject);
    setSliderProjects(projects);
  };
  const restructureSliderProjectsOnPreviousButton = (): void => {
    setPreviousButtonClicked(false);
    const projects = [...sliderProjects];
    const firstProject = projects.pop();
    projects.unshift(firstProject);
    setSliderProjects(projects);
  };

  return (
    <div className="w-full  h-full flex flex-col space-y-6 justify-betweenas">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <div className="flex space-x-6">
          <img
            src="/assets/arrow-circle-right.svg"
            alt="previous project button"
            className="cursor-pointer"
            onClick={() => setPreviousButtonClicked(true)}
          />
          <img
            src="/assets/arrow-circle-right.svg"
            alt="next project button"
            className="cursor-pointer"
            style={{
              transform: "rotate(180deg)",
            }}
            onClick={() => setNextButtonClicked(true)}
          />
        </div>
      </div>

      <div className={styles.slider_container}>
        <div className={sliderClasses} onAnimationEnd={sliderController}>
          {sliderProjects.map((project) => {
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
