import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export const RoleTag = styled(motion.label)`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.theme.secondary};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Line = styled(motion.div)`
  height: 1px;
  background-color: ${(props) => props.theme.secondary};
  flex: 0.1;
  margin-right: 1vw;
  :before,
  :after {
    content: "";
    height: 7px;
    width: 7px;
    border-radius: 10px;
    float: left;
    background: ${(props) => props.theme.primary};
    margin-top: -3px;
  }
  :after {
    float: right;
  }

  @media screen and (max-width: 480px) {
    flex: 0.4;
  }
`;

export const HeroTag = styled(motion.h2)`
  color: ${(props) => props.theme.secondary};
  font-family: "Raleway", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  font-size: 4rem;
  margin-block-start: 0.5em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  font-weight: 600;
  @media screen and (max-width: 1400px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 1.5rem;
  }
`;

export const HeroDescription = styled(motion.h4)`
  color: ${(props) => props.theme.tertiary};
  font-size: 1.25rem;
  font-weight: 400;
  text-align: justify;
  @media screen and (max-width: 1400px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.75rem;
  }
`;

export const ButtonsContainer = styled(motion.div)`
  margin-block-start: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TalkBtn = styled.button`
  background-color: ${(props) => props.theme.primary};
  outline: none;
  border: none;
  padding: 2rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Raleway", Georgia, "Times New Roman", Times, serif;
  color: ${(props) => props.theme.secondary};
  font-weight: 600;

  @media screen and (max-width: 1400px) {
    padding: 1.7rem 0.8rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 0.6rem;
  }

  @media screen and (max-width: 280px) {
    padding: 0.75rem 1rem;
  }

  & span {
    border: 1.5px solid ${(props) => props.theme.secondary};
    padding: 1rem 2rem;
    border-radius: 10px;
    @media screen and (max-width: 1400px) {
      padding: 0.8rem 1.6rem;
    }
    @media screen and (max-width: 768px) {
      padding: 0.6rem 0.8rem;
    }
    @media screen and (max-width: 280px) {
      padding: 0.25rem 0.5rem;
    }
  }
`;

export const PortfolioBtn = styled(Link)`
  outline: none;
  border: none;
  margin-left: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-family: "Raleway", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 1em;
    justify-content: flex-start;
    align-self: flex-start;
  }
  & > svg {
    margin-left: 1vw;
    background-color: ${(props) => props.theme.primary};
  }
`;
