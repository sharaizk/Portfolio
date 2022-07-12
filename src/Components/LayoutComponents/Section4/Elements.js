import styled from "styled-components";
import { motion } from "framer-motion";

export const Section4Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2vh 10vw;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-bottom:1em;
  white-space: nowrap;
  @media screen and (max-width:480px) {
    font-size: 2.5rem;
  }
`;
