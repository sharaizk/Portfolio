import styled from "styled-components";
import { Link } from "react-scroll";
export const Section1 = styled.div`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-left: 10vw; */
  align-items: center;
  padding-top: 16px;

  @media screen and (max-width: 768px) {
  }
`;

export const HeroDescription = styled.h1`
  color: #f6f6f6;
  font-family: "Nunito", sans-serif;
  font-size: 5rem;
  line-height: 6rem;
  width: 60%;
  text-align: center;
  & span {
    color: #ffcb74;
  }
  @media screen and (max-width: 768px) {
    font-size: 4rem;
    line-height: 5rem;
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 4rem;
    width: 95%;
  }
`;

export const WhoIMButton = styled(Link)`
  outline: none;
  border: none;
  color: #ffff;
  background: linear-gradient(to right, rgba(220, 150, 90, 1) 50%, #1c1d24 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  transition: all 0.3s ease-out;
  padding: 0.9rem 2rem;
  border-radius: 2.5px;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    background-position: right bottom;
  }
`;
