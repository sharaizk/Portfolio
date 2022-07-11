import React from "react";
import {
  CardContainer,
  CardTitle,
  CardDescription,
  TextContainer,
  ImgContainer,
  Image
} from "./Element";
const StackCard = ({ title, logo, bgSize, left, description,banner }) => {
  return (
    <CardContainer left={left} banner={banner} size={bgSize}>
      <ImgContainer>
        <Image src={logo} alt="logo"/>
      </ImgContainer>
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </TextContainer>
    </CardContainer>
  );
};

export default StackCard;
