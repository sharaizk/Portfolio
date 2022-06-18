import React from "react";
import styled from "styled-components";
const StyledDivider = styled.section`
  position: relative;
  background: #110e0f;
  height: 0.5px;
  margin-bottom: 2vh;
  opacity: 0.25;
`;

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;
