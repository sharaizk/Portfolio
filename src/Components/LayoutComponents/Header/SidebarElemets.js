import styled from "styled-components";
// import { FaTimes } from "react-icons/fa";
import { Link as NavLink } from "react-scroll";
export const SidebarContainer1 = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    position: fixed;
    background-color: ${(props) => props.theme.tertiary};
    width: 60%;
    max-width: 420px;
    min-width: 70%;
    z-index: 998;
    height: 100vh;
    display: grid;
    place-items: center;

    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    transition-delay: ${({ isOpen }) => (isOpen ? "0s" : "0.4s")};
  }
`;

export const SidebarContainer2 = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    position: fixed;
    background-color: ${(props) => props.theme.secondary};
    width: 95%;
    z-index: 998;
    height: 100vh;
    display: grid;
    place-items: center;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(-2.25%)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    transition-delay: ${({ isOpen }) => (isOpen ? "0s" : "0.2s")};
  }
`;

export const SidebarContainer3 = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    position: fixed;
    background-color: ${(props) => props.theme.background};
    width: 96%;
    z-index: 998;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(-2.5%)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    transition-delay: ${({ isOpen }) => (isOpen ? "0s" : "0.4s")};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 40%;
  width: 100%;
`;

export const NavLinks = styled(NavLink)`
  color: ${(props) => props.theme.secondary};
  font-family: "Nunito", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  display: flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.05s ease-in;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 0.9rem;
  letter-spacing: 1px;
  position: relative;
  transition: 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 10px;
    bottom: 35%;
    z-index: -1;
    opacity: 0;
    border-radius: 10px;
    background-color: #ffcb74;
    transition: 0.3s;
  }
  &:hover {
    color: #fff;
    &::after {
      width: 73%;
      opacity: 1;
    }
  }
  &.active {
    border-bottom: 3px solid #f64d70;
    color: #f64d70;
  }
`;
