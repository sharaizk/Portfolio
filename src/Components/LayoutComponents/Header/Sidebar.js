import React from "react";
import {
  SidebarContainer1,
  SidebarContainer2,
  SidebarContainer3,
  NavLinks,
  LinkContainer,
} from "./SidebarElemets";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer1 onClick={toggle} isOpen={isOpen}>
      <SidebarContainer2 isOpen={isOpen}>
        <SidebarContainer3 isOpen={isOpen}>
          <LinkContainer>
            <NavLinks>Home</NavLinks>
            <NavLinks>About Me</NavLinks>
            <NavLinks>Services</NavLinks>
            <NavLinks>Portfolio</NavLinks>
            <NavLinks>Blog</NavLinks>
            <NavLinks>Contact</NavLinks>
          </LinkContainer>
        </SidebarContainer3>
      </SidebarContainer2>
    </SidebarContainer1>
  );
};

export default Sidebar;
