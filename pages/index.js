import Head from "next/head";
import Image from "next/image";
import Section from "../components/section/Section";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bate Tanyi</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Section
          {...{
            backgroundColour: "light",
            backgroundImages: true,
            id: "landing",
          }}
        ></Section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
