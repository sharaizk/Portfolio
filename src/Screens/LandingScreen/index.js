import React from "react";
import { Section1, LeftSection, RightSection } from "./LandingScreenElements";
import Left from "Components/LayoutComponents/Section1/Left";
import Right from "Components/LayoutComponents/Section1/Right";
const LandingScreen = () => {
  return (
    <Section1 id="home">
      <LeftSection>
        <Left />
      </LeftSection>
      <RightSection>
        <Right/>
      </RightSection>
    </Section1>
  );
};

export default LandingScreen;
