import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-color: ${(props) => props.theme.secondary};
  color: #fff;
`;

export const SvgContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;
export const Img = styled.img`
  height: 15vh;
  width: 100%;
  @media screen and (max-width: 480px) {
    height: 6.981740064446831vh;
    width: 5.907626208378088vh;
  }
  @media screen and (max-width: 280px) {
    height: 5.981740064446831vh;
    width: 4.907626208378088vh;
  }
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
`;

export const Divider = styled.section`
  position: relative;
  background: #fff;
  height: 0.25px;
  width: 100%;
  margin-bottom: 2vh;
  z-index: 1;
  opacity: 0.1;
`;
