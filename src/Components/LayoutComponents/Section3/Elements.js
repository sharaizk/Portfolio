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
`;

export const TechStackContainer = styled(motion.div)`
  height: 100%;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  place-items: center;
`;
