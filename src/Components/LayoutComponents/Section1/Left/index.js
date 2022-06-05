import React from "react";
import {
  RoleTag,
  Line,
  HeroTag,
  HeroDescription,
  ButtonsContainer,
  TalkBtn,
  PortfolioBtn,
} from "./LeftElements";
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
const Left = () => {
  return (
    <>
      <RoleTag>
        <Line />
        Full Stack Developer
      </RoleTag>
      <HeroTag>Hello, I'm Sharaiz Khan. A Full Stack Developer</HeroTag>
      <HeroDescription>
        I'm a Full Stack Developer with 2 years of Industry Experience. I Have
        been Creating innovative applications for users all around the world.
      </HeroDescription>
      <ButtonsContainer>
        <TalkBtn>
          <span>Let's talk with me</span>
        </TalkBtn>
        <PortfolioBtn>Portfolio
          <BsFillArrowUpRightSquareFill size={25}/>
        </PortfolioBtn>
      </ButtonsContainer>
    </>
  );
};

export default Left;
