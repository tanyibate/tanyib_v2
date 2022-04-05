import React from "react";
import Section from "../../components/section/Section";
import LinkButton from "../../components/link-button/LinkButton";
import styles from "./landing-section-styles.module.scss";

export default function LandingSection() {
  const name = "Bate Tanyi";
  const firstName = "Bate";
  const lastName = "Tanyi";
  const nameArray = [];
  const firstNameArray = [];
  const lastNameArray = [];

  for (var i = 0; i < name.length; i++) {
    nameArray.push(
      <span key={name.charAt(i) + "nameChar" + i}>{name.charAt(i)}</span>
    );
  }
  for (var i = 0; i < firstName.length; i++) {
    firstNameArray.push(
      <span key={firstName.charAt(i) + "firstNameChar" + i}>
        {firstName.charAt(i)}
      </span>
    );
  }
  for (var i = 0; i < lastName.length; i++) {
    lastNameArray.push(
      <span key={lastName.charAt(i) + +"lastNameChar" + i}>
        {lastName.charAt(i)}
      </span>
    );
  }

  return (
    <Section
      {...{ id: "landing", backgroundColour: "light", backgroundImages: true }}
    >
      <div
        className={`w-full flex flex-col lg:flex-row lg:space-x-32 justify-center lg:justify-start lg:items-start space-y-8 lg:space-y-0 ${styles.landing}`}
      >
        <div className="flex items-center flex-col lg:items-start">
          <p className="text-xl light-blue">Hello, my name is</p>
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="lg:hidden">{nameArray.map((el) => el)}</h1>
            <h1 className="hidden lg:block">
              {firstNameArray.map((el) => el)}
            </h1>
            <h1 className="hidden lg:block">{lastNameArray.map((el) => el)}</h1>
          </div>
        </div>
        <div
          className={`flex flex-col space-y-5 lg:justify-start items-center lg:items-start ${styles.description}`}
        >
          <h2>I build things for the web.</h2>
          <p className=" max-w-xl lg:max-w-lg">
            I am full-stack developer that specializes in building responsive
            and accessible web applications. I love all things that are
            JavaScript and have worked witha range of different JavaScript
            frameworks such as React.js, Vue.js and Node.js.
          </p>
          <LinkButton href="#portfolio">Check Out my Portfolio</LinkButton>
        </div>
      </div>
    </Section>
  );
}
