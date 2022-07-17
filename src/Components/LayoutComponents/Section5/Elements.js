import styled from "styled-components";
import { motion } from "framer-motion";

export const Section5Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4vh 10vw;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const TestimonialContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
