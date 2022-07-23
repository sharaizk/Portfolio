import React from "react";
import {
  CardContainer,
  CardTitle,
  CardDescription,
  TextContainer,
  ImgContainer,
  Image,
  Parent,
} from "./Element";
import { popupAnimation, popupContainer } from "helpers/animationHelpers";
const StackCard = ({
  title,
  logo,
  bgSize,
  left,
  description,
  banner,
  transform,
  bottom = "-85%",
}) => {
  return (
    <Parent
      variants={popupContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <CardContainer
        variants={popupAnimation}
        backgroundimg={logo}
        left={left}
        banner={banner}
        size={bgSize}
        transform={transform}
        bottom={bottom}
        key={title}
      >
        <ImgContainer>
          <Image src={logo} alt="logo" />
        </ImgContainer>
        <TextContainer>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainer>
      </CardContainer>
    </Parent>
  );
};

export default StackCard;
