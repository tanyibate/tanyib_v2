import React from "react";
import Section from "../../components/section/Section";
import styles from "./about-section-styles.module.scss";

export default function AboutSection() {
  return (
    <Section id="about" backgroundColour={"dark"} backgroundImages={false}>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:justify-between lg:items-end lg:flex-row-reverse w-full items-center justify-center">
        <div className={styles.image_placeholder}>
          <div className={styles.image_background}></div>
          <img src="/assets/headshot.png" alt="bate tanyi headshot" />
        </div>
        <div className="w-full">
          <h1>Bate Tanyi.</h1>
          <h2>Me, Myself & I</h2>
          <p className={styles.text}>
            I am a full-stack developer who has a love for everything that is
            JavaScript, my forte is a combination of React on the front-end and
            Express.js/Node.js on the backend. I have dabbled in a range
            JavaScript frameworks such as Vue.js and Angular.
            <br />
            <br />I have been working as a full-stack developer for more than
            two years now. During this time, I've worked with Government
            clients, and have completed personal projects which has enabled me
            to develop skills such as database management, quality analysis,
            application development and testing. I am always looking for more
            opportunities to challenge myself as a developer so please feel free
            to contact me.{" "}
          </p>
          <ul className="mt-10">
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>Mongo</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
