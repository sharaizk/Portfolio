import React from "react";
import { ImageContainer, Image } from "./Elements";
import personalImage from "../../../../assets/images/personal.png";
import { popupContainer, popupAnimation } from "helpers/animationHelpers";
const Right = () => {
  return (
    <>
      <ImageContainer
        variants={popupContainer}
        initial="hidden"
        animate="visible"
      >
        <Image src={personalImage} variants={popupAnimation} />
      </ImageContainer>
    </>
  );
};

export default Right;
