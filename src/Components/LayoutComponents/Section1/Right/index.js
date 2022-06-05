import React from "react";
import { ImageContainer, Image } from "./Elements";
import personalImage from "../../../../assets/images/personal.png";
const Right = () => {
  return (
    <>
      <ImageContainer>
        <Image src={personalImage} />
      </ImageContainer>
    </>
  );
};

export default Right;
