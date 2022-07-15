import React from "react";
import { Section5Container, SectionTitle } from "./Elements";
import { titleAnimation } from "helpers/animationHelpers";

const Section5 = () => {
  return (
    <Section5Container>
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        variants={titleAnimation}
        viewport={{ once: false }}
      >
        Ready To Start a Project?
      </SectionTitle>
    </Section5Container>
  );
};

export default Section5;
