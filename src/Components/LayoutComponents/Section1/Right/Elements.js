import styled from "styled-components";

export const ImageContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  clip-path: polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%);
`;
