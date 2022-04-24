import React from "react";
import styles from "./portfolio-section-styles.module.scss";
import Section from "../../components/section/Section";
import PortfolioGallery from "../../components/portfolio-gallery/PortfolioGallery";
import { Project } from "../../components/portfolio-card/PortfolioCard";

export default function PortfolioSection() {
  const projects: Project[] = [
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
    {
      title: "Teacozy Chatbot",
      description:
        "A full-stack application with React on the front-end and Express.js on the backend. It's a chatbot that allows customer of teashop to ask questions about their business.",
      image: "/assets/project-images/tea-cozy-chatbot.png",
      url: "https://chatbot-frontend-chi.vercel.app/",
    },
  ];
  return (
    <Section
      {...{
        backgroundColour: "light",
        backgroundImages: false,
        id: "portfolio",
      }}
    >
      <h1>My Work</h1>
      <PortfolioGallery {...{ projects: projects, title: "My Recent Work" }} />
    </Section>
  );
}
