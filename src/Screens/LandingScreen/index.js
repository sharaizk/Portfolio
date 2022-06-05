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
const LandingScreen = () => {
  return (
    <>
      <Section1 id="home">
        <LeftSection>
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
    </>
  );
};

export default LandingScreen;
