import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  height: 30vh;
  width: 100%;
  border-radius: 0% 0% 0% 0%;
  position: relative;
  z-index: 1;
  background-color: #100e0e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  &::before {
    content: "";
    background-image: ${(props) => `url(${props.background})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0%;
    right: 0px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
    filter: blur(5px);
  }
  @media screen and (max-width: 480px) {
    height: 60vh;
  }
`;

export const CardImage = styled.img`
  width: 5%;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 15%;
  }
`;

export const CardTitle = styled.p`
  color: #fff;
  font-family: "Poppins", cursive;
  font-size: 1rem;
  margin-top: 2vh;
  opacity: 90%;
`;

export const CardDescription = styled.p`
  color: #fff;
  font-family: "Edu NSW ACT Foundation", cursive;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 2vh;
  text-align: center;
  opacity: 90%;
`;