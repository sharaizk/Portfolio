import React from "react";
import {
  Section1,
  LeftSection,
  RightSection,
  Qoute,
  PlayContainer,
} from "./LandingScreenElements";
import Left from "Components/LayoutComponents/Section1/Left";
import Right from "Components/LayoutComponents/Section1/Right";
import { GiTechnoHeart } from "react-icons/gi";
import FollowMe from "Components/LayoutComponents/FollowMe";
import Section2 from "Components/LayoutComponents/Section2";
import Section3 from "Components/LayoutComponents/Section3";
import Section4 from "Components/LayoutComponents/Section4";
import Section5 from "Components/LayoutComponents/Section5";
import Divider from "Components/CustomComponents/Divider";
import { variantContainer } from "helpers/animationHelpers";
const LandingScreen = () => {
  return (
    <>
      <Section1 id="home">
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
      </Section1>
      <FollowMe />
      <Section2 />
      <Divider />
      <Section3 />
      <Section4 />
      <Divider />
      <Section5 />
    </>
  );
};

export default LandingScreen;
