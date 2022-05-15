import React from "react";
import {
  Section1,
  HeroDescription,
  WhoIMButton,
} from "./LandingScreenElements";

const LandingScreen = () => {
  return (
    <Section1 id="home">
      <HeroDescription>
        Hello,
        <br />
        I'm Sharaiz Khan a<br />
        Full-Stack <span>Developer</span>
      </HeroDescription>
      <WhoIMButton>See Who I'm</WhoIMButton>
    </Section1>
  );
};

export default LandingScreen;
