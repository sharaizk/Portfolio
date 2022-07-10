import React from "react";
import { ImageContainer, Image } from "./Elements";
import personalImage from "../../../../assets/images/personal.png";
import { popupContainer } from "helpers/animationHelpers";
const Right = () => {
  const imgAnimation={
    hidden:{
      scale:0,
      y:200
    },
    visible:{
      scale: 1,
      y:0,
      transition:{
        type:"spring",
        duration:0.8
      }
    },
  }
  return (
    <>
      <ImageContainer
        variants={popupContainer}
        initial="hidden"
        animate="visible"
      >
        <Image src={personalImage} variants={imgAnimation}/>
      </ImageContainer>
    </>
  );
};

export default Right;
