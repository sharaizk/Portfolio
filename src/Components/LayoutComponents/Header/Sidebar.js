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
            <NavLinks
              onClick={() => toggle()}
              to="home"
              offset={-50}
              smooth
              activeClass="active"
              spy={true}
            >
              Home
            </NavLinks>
            <NavLinks
              onClick={() => toggle()}
              to="techstack"
              offset={-50}
              smooth
              activeClass="active"
              spy={true}
            >
              Tech Stack
            </NavLinks>
            <NavLinks
              onClick={() => toggle()}
              to="portfolio"
              offset={-50}
              smooth
              activeClass="active"
              spy={true}
            >
              Portfolio
            </NavLinks>
            <NavLinks
              onClick={() => toggle()}
              to="testimonial"
              offset={-50}
              smooth
              activeClass="active"
              spy={true}
            >
              Testimonials
            </NavLinks>
          </LinkContainer>
        </SidebarContainer3>
      </SidebarContainer2>
    </SidebarContainer1>
  );
};

export default Sidebar;
