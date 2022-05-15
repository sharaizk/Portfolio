import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarContainer,
  NavBanner,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./HeaderElements";
import { Twirl as Hamburger } from "hamburger-react";
const Nav = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Navbar scrollNav={scrollNav}>
      <NavbarContainer>
        <NavBanner>Sharaiz Khan</NavBanner>
        <MobileIcon scrollNav={scrollNav}>
          <Hamburger
            toggled={isOpen}
            toggle={toggle}
            size={25}
            duration={0.35}
            easing="ease-in"
            rounded
            color="#ffcb74"
          />
        </MobileIcon>
        <NavMenu>
          <NavItem scrollNav={scrollNav}>
            <NavLinks>Home</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks>About Me</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks>Services</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks>Portfolio</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks>Blog</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks>Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Navbar>
  );
};

export default Nav;
