import styled from "styled-components";

export const CardContainer = styled.div`
  height: 20vh;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${(props) => props.theme.color};
`;
