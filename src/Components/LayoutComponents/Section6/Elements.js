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

export const Subtitle = styled(motion.h5)`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  margin-bottom: 1em;
  opacity: 65%;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const PlatFormContainer = styled(motion.div)`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PlatformCard = styled(motion.div)`
  flex: 0.25;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  & a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-decoration: none; /* No underlines on the link */
    z-index: 10; /* Places the link above everything else in the div */
    background-color: #fff; /* Fix to make div clickable in IE */
    opacity: 0; /* Fix to make div clickable in IE */
    filter: alpha(opacity=1); /* Fix to make div clickable in IE */
  }
`;

export const CardImage = styled(motion.img)`
  width: 50%;
  height: auto;
  justify-self: center;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
export const CardTitle = styled(motion.h3)`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins";
`;
