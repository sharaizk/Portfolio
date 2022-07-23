import React from "react";
import {
  Section1Container,
  LeftSection,
  RightSection,
  Qoute,
  PlayContainer,
} from "./Elements";
import { Helmet } from "react-helmet";
import Left from "./Left";
import { variantContainer } from "helpers/animationHelpers";
import { GiTechnoHeart } from "react-icons/gi";


import Right from "./Right";
const Section1 = () => {
  return (
    <Section1Container key={2000} id="home">
      <Helmet>
        <title>Sharaiz Khan</title>
        <meta
          name="description"
          content=" I'm a Full Stack Developer with 2 years of Industry Experience. I Have
    been Creating innovative applications for users all around the world."
        />
      </Helmet>
      <LeftSection
        variants={variantContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Left />
      </LeftSection>
      <RightSection>
        <Right />
        <Qoute>
          First, solve the problem.
          <br />
          Then, write the code.
        </Qoute>
        <PlayContainer>
          <GiTechnoHeart size={30} color="#000" />
        </PlayContainer>
      </RightSection>
    </Section1Container>
  );
};

export default Section1;
