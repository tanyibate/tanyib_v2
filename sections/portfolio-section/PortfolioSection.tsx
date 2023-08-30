import React from "react";
import styles from "./portfolio-section-styles.module.scss";
import Section from "../../components/section/Section";
import PortfolioGallery from "../../components/portfolio-gallery/PortfolioGallery";
import { Project } from "../../components/portfolio-card/PortfolioCard";

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "Connect 4 AI",
      description:
        "A near impossible to beat Connect 4 AI created using the minimax algorithm. The AI is accesible via a REST API.",
      image: "/assets/project-images/connect4.png",
      url: "https://connect-four-iota.vercel.app/",
    },
    {
      title: "Tapres",
      description:
        "My first ever commissioned project which is a real estate platform created using Next.js",
      image: "/assets/project-images/tapres.png",
      url: "https://www.tapres.co.uk/",
    },
    {
      title: "E-commerce platform",
      description:
        "A e-commerce platform created with React.js and an Express.js server serving the backend. Checkout functionality is currently in progress.",
      image: "/assets/project-images/audiophile.png",
      url: "https://tech-marketplace-frontend.vercel.app",
    },
    {
      title: "REST API Countries Dashboard",
      description:
        "A country statistics dashboard created using React with data supplied by the restcountries.com api. Countries can be filtered by region and title.",
      image: "/assets/project-images/rest-api-dashboard.png",
      url: "https://rest-countries-api-dashboard.vercel.app/countries",
    },
    {
      title: "E-Commerce product page",
      description:
        "An exemplar page of an e-commerce website product created using React. The product can be added to the cart. Cart state is tracked using redux.",
      image: "/assets/project-images/e-commerce-product-page.png",
      url: "https://e-commerce-product-page-iota.vercel.app/",
    },
    {
      title: "Sunnyside agency landing page",
      description:
        "An exemplar landing page of a digital agency created using React.",
      image: "/assets/project-images/sunnyside-agency-landing-page.png",
      url: "https://sunnyside-agency-landing-page-ecru.vercel.app/",
    },
  ];
  return (
    <Section
      {...{
        backgroundColour: "dark",
        backgroundImages: false,
        id: "portfolio",
      }}
    >
      <h1>My Work</h1>
      <PortfolioGallery {...{ projects: projects, title: "My Recent Work" }} />
    </Section>
  );
}
