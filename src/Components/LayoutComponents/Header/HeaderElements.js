import styled from "styled-components";
import { Link as NavLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = styled.nav`
  background-color: ${({ scrollNav }) =>
    !scrollNav ? "transparent" : "rgba(0,0,0,0.15)"};

  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  transition: 0.2s height ease-out;
  backdrop-filter: ${({ scrollNav }) =>
    !scrollNav ? "blur(0px)" : "blur(10px)"};
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    transition: 0.2s height ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "75px")};
  z-index: 1;
  width: 100%;
  padding: 0 50px;
  /* max-width: 1800px; */
`;

export const NavBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  font-family: "SkModernistRegular", "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  color: #ffcb74;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    transition: 0.2s translate ease;
    display: block;
    position: absolute;
    color: #3c3c3c;
    top: 0;
    right: 0;
    transform: ${({ scrollNav }) =>
      !scrollNav ? "translate(-100%, 40%)" : "translate(-100%, 50%)"};
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 0px !important;
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};
  transition: 0.2s height ease;
`;

export const NavLinks = styled(NavLink)`
  color: #f6f6f6;
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
  text-transform: uppercase;
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

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const Icon = styled(GiHamburgerMenu)`
  color: #f64d70;
`;
