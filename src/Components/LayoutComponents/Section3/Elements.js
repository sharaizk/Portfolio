import styled from "styled-components";
import { motion } from "framer-motion";

export const Section3Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2vh 10vw;
  margin-bottom: 10vh;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-bottom:1em;
  white-space: nowrap;
  @media screen and (max-width:480px) {
    font-size: 1.4rem;
  }
`;

export const TechStackContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  place-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
