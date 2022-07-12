import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Logo,
} from "./HeaderElements";
import { Twirl as Hamburger } from "hamburger-react";
import { theme } from "../../../theme";
import logoImg from "assets/images/logo.png";
const Nav = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 30) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Navbar
      $scrollNav={scrollNav}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
    >
      <NavbarContainer>
        <NavLogo to="home" smooth>
          <Logo src={logoImg} alt="Logo" />
          Sharaiz Khan
        </NavLogo>
        <MobileIcon $scrollNav={scrollNav}>
          <Hamburger
            toggled={isOpen}
            toggle={toggle}
            size={20}
            duration={0.35}
            easing="ease-in"
            rounded
            color={theme.secondary}
          />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home" smooth activeClass="active" spy={true}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="techstack"
              offset={0}
              smooth
              activeClass="active"
              spy={true}
            >
              Tech Stack
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="portfolio"
              offset={-50}
              smooth
              activeClass="active"
              spy={true}
            >
              Portfolio
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>Testimonial</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink>Contact Me</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Navbar>
  );
};

export default Nav;
