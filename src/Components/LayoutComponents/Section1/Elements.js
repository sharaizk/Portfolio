import styled from "styled-components";
// import { Link } from "react-scroll";
import { motion } from "framer-motion";
export const Section1Container= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;
  position: relative;
  height: 96vh;
  max-height: 100%;
  position: relative;
  z-index: 1;
  padding-top: 120px;
  box-sizing: border-box;
  padding-bottom: 60px;
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled(motion.div)`
  flex: 0.5;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 1vw;
  @media screen and (max-width: 768px) {
    margin-top: 1vh;
    margin-right: 0;
    order: 2;
  }
`;
export const RightSection = styled.div`
  flex: 0.4;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Qoute = styled.div`
  position: absolute;
  color: ${(props) => props.theme.secondary};
  top: 12%;
  left: 70%;
  font-family: "Courgette", cursive;
  font-size: 1rem;

  @media screen and (max-width: 1440px) {
    left: 67%;
    top: 10%;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1024px) {
    left: 60%;
    top: 12%;
    font-size: 0.75rem;
  }

  @media screen and (max-width: 768px) {
    top: 2%;
    left: 70%;
  }

  @media screen and (max-width: 480px) {
    top: 0%;
    left: 60%;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 280px) {
    left: 61%;
    font-size: 0.5rem;
  }
`;

export const PlayContainer = styled.div`
  height: 10vh;
  width: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  border-radius: 50%;
  left: -7.5%;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    left: -13%;
  }
`;
