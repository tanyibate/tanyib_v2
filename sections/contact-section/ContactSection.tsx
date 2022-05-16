import React from "react";
import Section from "../../components/section/Section";

export default function ContactSection() {
  return (
    <Section
      {...{ backgroundColour: "light", backgroundImages: false, id: "contact" }}
    >
      <h1>Send Us a Message</h1>
      <h2>Contact Us</h2>
      <div className="flex justify-between"></div>
    </Section>
  );
}
