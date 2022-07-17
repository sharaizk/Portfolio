import React from "react";
import {
  FooterContainer,
  Copyright,
  SvgContainer,
  Img,
  Divider,
} from "./Elements";
import { footer1, footer2, footer3, footer4 } from "helpers/assetsaConfig";
const Footer = () => {
  return (
    <FooterContainer>
      <SvgContainer>
        <Img src={footer1} alt="footer1" />
        <Img src={footer2} alt="footer1" />
        <Img src={footer3} alt="footer1" />
        <Img src={footer4} alt="footer1" />
      </SvgContainer>
      <Divider />
      <Copyright>© Copyright 2022 - TheCodeBro</Copyright>
    </FooterContainer>
  );
};

export default Footer;
