import styled from "styled-components";
export const FollowMeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10vw;
  position: relative;
  height: 100%;
  max-height: 100%;
  padding-bottom: 1vh;
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
`;

export const FollowMeTag = styled.label`
  font-size: 1.25srem;
  font-family: "Raleway", Georgia, "Times New Roman", Times, serif;
  font-weight: 600;
`;

export const ALink = styled.a`
  color: #000;
  margin-right: 1vw;
`;

export const Line = styled.div`
  height: 1px;
  width: 5%;
  border-radius: 10px;
  margin: 0 1vw;
  border: 1px solid ${(props) => props.theme.secondary};
  opacity: 0.5;
`;
