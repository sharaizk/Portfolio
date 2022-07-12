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
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { variantAnimation1 } from "helpers/animationHelpers";
const Left = () => {
  return (
    <>
      <RoleTag variants={variantAnimation1}>
        <Line />
        Full Stack Developer
      </RoleTag>
      <HeroTag variants={variantAnimation1}>
        Hello, I'm Sharaiz Khan. A Full Stack Developer
      </HeroTag>
      <HeroDescription variants={variantAnimation1}>
        I'm a Full Stack Developer with 2 years of Industry Experience. I Have
        been Creating innovative applications for users all around the world.
      </HeroDescription>
      <ButtonsContainer variants={variantAnimation1}>
        <TalkBtn>
          <span>Let's talk with me</span>
        </TalkBtn>
        <PortfolioBtn to="portfolio" smooth offset={-50}>
          Portfolio
          <BsFillArrowUpRightSquareFill size={25} />
        </PortfolioBtn>
      </ButtonsContainer>
    </>
  );
};

export default Left;
