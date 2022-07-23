import styled from "styled-components";
import { motion } from "framer-motion";
export const Parent = styled(motion.div)`
  height: 100%;
  width: 100%;
`;
export const CardContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  position: relative;
  -webkit-box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.27);
  cursor: pointer;

  &::before {
    content: "";
    background-image: ${(props) => `url(${props.backgroundimg})`};
    background-size: ${(props) => props.size};
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0%;
    right: 0px;
    bottom: ${(props) => props.bottom};
    transform: ${(props) => `rotate(${props.transform})`};
    left: ${(props) => props.left};
    overflow: hidden;
    z-index: 0;
    opacity: 25%;
  }

  &::after {
    float: left;
    top: 1.5em;
    position: absolute;
    transform: rotate(-50deg);
    background: ${(props) => props.banner};
    color: white;
    font-weight: bold;
    left: -3em;
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border: 0px;
    margin: 0;
    z-index: 1;
    content: "";
  }
`;

export const ImgContainer = styled.div`
  flex: 0.1;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 0.85;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;
`;

export const CardTitle = styled.h4`
  font-family: "SkModernistBold", sans-serif;
  font-weight: 600;
  z-index: 1;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.tertiary};
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: justify;
  font-family: "SkModernistRegular", sans-serif;
`;
