import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../sections/about-section/AboutSection";
import LandingSection from "../sections/landing-section/LandingSection";
import PortfolioSection from "../sections/portfolio-section/PortfolioSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Bate Tanyi</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LandingSection />
        <AboutSection />
        <PortfolioSection />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
