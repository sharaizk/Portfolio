import styled from "styled-components";
import { motion } from "framer-motion";
export const Section2Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 10vw;
  position: relative;
  min-height: 30vh;
  height: 100%;
  max-height: 100%;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 1vh;
  }
`;

export const ProjectTag = styled.label`
  font-size: 4rem;
  font-weight: 400;
  line-height: 2rem;
  width: 100%;
  margin-bottom: 3vh;
  font-family: "Raleway", sans-serif;
  & span {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
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
    margin-right: 0;
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
  @media screen and (max-width: 768px) {
    margin-top: 1vh;
  }
`;

export const TagContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledSVG = styled(motion.svg)`
  transform: rotate(45deg) !important;

  & path {
    fill: ${({ theme }) => theme.tertiary};
  }
`;

export const StyledPath = styled(motion.path)`
  width: 100%;
`;

export const ServicesContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  padding: 2vh 2vw;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondary};
  position: relative;
`;

export const Icon = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
`;

export const IconContainer = styled.div`
  position: absolute;
  left: -7%;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  @media screen and (max-width: 768px) {
    left: -6%;
  }
  @media screen and (max-width: 480px) {
    left: -10%;
  }
`;

export const Services = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 40px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 0px;
  }
  @media screen and (max-width: 280px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-row-gap: 0px;
  }
`;

export const ServiceTag = styled(motion.div)`
  height: 80%;
  width: 100%;
  background-color: ${({ theme }) => theme.tertiary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-size: 0.8rem;
`;
