import styled from "styled-components";

export const ImageContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 60vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  clip-path: polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%);
  @media screen and (max-width: 1400px) {
    height: 50vh;
  }
`;

export const Image = styled.img`
  height: 90%;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
