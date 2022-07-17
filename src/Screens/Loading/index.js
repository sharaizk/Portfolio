import React from "react";
import ReactLotte from "react-lottie";
import { LoadingContainer } from "./Elements";
import { loadinganimation } from "helpers/assetsaConfig";
import "./loading.scss";
const LoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadinganimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <LoadingContainer>
      <ReactLotte options={defaultOptions} height={400} width={400} />
    </LoadingContainer>
  );
};

export default LoadingScreen;
