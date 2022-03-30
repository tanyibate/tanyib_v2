import React from "react";
import Section from "../../components/section/Section";
import LinkButton from "../../components/link-button/LinkButton";

export default function LandingSection() {
  return (
    <Section
      {...{ id: "landing", backgroundColour: "light", backgroundImages: true }}
    >
      <div className="w-full flex flex-row justify-between items-start">
        <div>
          <p className="text-xl light-blue">Hello, my name is</p>
          <h1>
            Bate
            <br />
            Tanyi
          </h1>
        </div>
        <div className="max-w-lg flex flex-col space-y-5">
          <h2>I build things for the web.</h2>
          <p>
            I am full-stack developer that specializes in building responsive
            and accessible web applications. I love all things that are
            JavaScript and have worked witha range of different JavaScript
            frameworks such as React.js, Vue.js and Node.js
          </p>
          <LinkButton href="#portfolio">Check Out my Portfolio</LinkButton>
        </div>
      </div>
    </Section>
  );
}
