import styled from "styled-components";
import { motion } from "framer-motion";

export const PortfolioContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextSection = styled(motion.div)`
  flex: 0.45;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 1;
    margin-bottom: 1vh;
  }
`;

export const ImageSection = styled(motion.div)`
  height: 100%;
  flex: 0.45;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: auto;
`;
export const Title = styled(motion.h4)`
  font-family: "SkModernistRegular", sans-serif;
  z-index: 1;
  font-size: 2.75rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.tertiary};

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
  }
`;
export const Description = styled(motion.p)`
  margin-bottom: 1em;
  font-size: 1rem;
  text-align: justify;
  font-family: "SkModernistRegular", sans-serif;
  line-height: 1.5rem;
`;

export const PortfolioLink = styled(motion.a)`
  text-decoration: none;
  font-weight: 500;
  color: #fb325d;
`;
