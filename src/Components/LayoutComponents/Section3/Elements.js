import styled from "styled-components";
import { motion } from "framer-motion";

export const Section3Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 5px;
  font-family: "SkModernistRegular", sans-serif;
  margin-bottom:1em;
  @media screen and (max-width:480px) {
    font-size: 1.6rem;
  }
`;

export const TechStackContainer = styled(motion.div)`
  height: 100%;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  place-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
