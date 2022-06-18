import styled, { keyframes } from "styled-components";
import { Link as NavLink } from "react-scroll";

const Pulse = keyframes`
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

export const Navbar = styled.nav`
  height: ${({ scrollNav }) => (!scrollNav ? "120px" : "70px")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  backdrop-filter: ${({ scrollNav }) =>
    !scrollNav ? "blur(0px)" : "blur(10px)"};
  transition: 0.2s all ease-out;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    transition: 0.2s height ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  @media screen and (max-width: 320px) {
    padding: 0;
  }
`;

export const NavLogo = styled(NavLink)`
  color: ${(props) => props.theme.secondary};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  font-family: "Raleway", "Gill Sans", "Gill Sans MT", sans-serif;
  text-decoration: none;
  font-weight: 600;
`;

export const Logo = styled.img`
  height: 50%;
  animation: ${Pulse} 1.5s ease-in-out infinite both;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    transition: 0.2s translate ease;
    display: block;
    position: absolute;
    color: #3c3c3c;
    top: 15%;
    right: 0;
    transform: ${({ scrollNav }) =>
      !scrollNav ? "translate(-100%, 40%)" : "translate(-100%, 10%)"};
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(NavLink)`
  color: ${(props) => props.theme.secondary};
  display: flex;
  font-family: "Raleway", "Gill Sans", "Gill Sans MT", sans-serif;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in;
  height: 100%;
  cursor: pointer;
  width: 100%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 35%;
    z-index: -1;
    opacity: 0;
    border-radius: 10px;
    background-color: ${(props) => props.theme.secondary};
    transition: 0.3s;
  }
  &:hover {
    &::after {
      width: 20%;
      opacity: 1;
    }
  }
  &.active {
    border-bottom: 3px solid #f64d70;
    color: #f64d70;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(NavLink)`
  border-radius: 10px;
  background-color: #161718;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.background};
  font-size: 16px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
`;
