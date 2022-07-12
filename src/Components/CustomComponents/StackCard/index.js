import React from "react";
import {
  CardContainer,
  CardTitle,
  CardDescription,
  TextContainer,
  ImgContainer,
  Image,
} from "./Element";
import { popupAnimation } from "helpers/animationHelpers";
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
    <CardContainer
      variants={popupAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      backgroundimg={logo}
      left={left}
      banner={banner}
      size={bgSize}
      transform={transform}
      bottom={bottom}
    >
      <ImgContainer>
        <Image src={logo} alt="logo" />
      </ImgContainer>
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </TextContainer>
    </CardContainer>
  );
};

export default StackCard;
