import styled from "styled-components";
// import { Link } from "react-scroll";
export const Section1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  position: relative;
  height: 95vh;
  max-height: 100%;
  position: relative;
  z-index: 1;
  padding-top: 80px;
  box-sizing: border-box;
  padding-bottom: 60px;
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
  @media screen and (max-width: 280px) {
    height: 90vh;
  }
`;

export const LeftSection = styled.div`
  flex: 0.5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 1vw;
  @media screen and (max-width: 768px) {
    margin-top: 1vh;
    margin-right: 0;
    order: 2;
  }
`;
export const RightSection = styled.div`
  flex: 0.5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
