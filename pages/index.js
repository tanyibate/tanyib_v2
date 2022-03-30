import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/section/Section";
import LandingSection from "../sections/landing-section/LandingSection";
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
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
