import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  height: 35vh;
  width: 100%;
  border-radius: 0% 0% 0% 0%;
  position: relative;
  z-index: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 2rem 2rem;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width:768px) {
    height: 30vh;
  }

  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;

export const CardImage = styled.img`
  width: 14%;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  @media screen and (max-width: 768px) {
    width: 15%;
  }
  @media screen and (max-width: 480px) {
    width: 25%;
  }
`;

export const CardTitle = styled.p`
  color: #4d4d4d;
  font-family: "Poppins", cursive;
  font-size: 1.4rem;
  margin-top: 1vh;
  font-weight: 500;
`;

export const CardDescription = styled.p`
  color: #424242;
  font-family: "Poppins", cursive;
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 2vh;
  text-align: center;
  opacity: 90%;
`;

export const Divide = styled.hr`
  border-top: 1px solid ${(props) => props.theme.secondary};
  width: 100%;
  opacity: 75%;
  border-radius: 5%;
  margin: 1em;
`;
export const Background=styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -2;
  opacity:15%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardTop = styled.div`
  position: absolute;
  margin: auto;
  border-radius: 10px 10px 0px 0px;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #1a3365;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SVG=styled.svg`
/* height: 100%; */
/* z-index: -2; */
`