import React from "react";
import {
  Section2Container,
  LeftSection,
  RightSection,
  ProjectTag,
  TagContainer,
  StyledSVG,
  ServicesContainer,
  IconContainer,
  Icon,
  ServiceTag,
  Services,
} from "./Elements";
import { MdOutlineDesignServices } from "react-icons/md";
import projectSVG from "../../../assets/images/projects.svg";

const SERVICES = [
  "Mobile App",
  "Web App",
  "Desktop App",
  "Ui/Ux Design",
  "SEO",
  "DevOps",
];

const Section2 = () => {
  return (
    <Section2Container>
      <LeftSection>
        <TagContainer>
          <ProjectTag>
            02+
            <br />
            <span>Years of Experience</span>
          </ProjectTag>
          <ProjectTag>
            5
            <br />
            <span>Projects Completed</span>
          </ProjectTag>
        </TagContainer>
        <StyledSVG src={projectSVG} />
      </LeftSection>
      <RightSection>
        <ServicesContainer>
          <IconContainer>
            <Icon>
              <MdOutlineDesignServices color="#110E0F" size={40} />
            </Icon>
          </IconContainer>
          <Services>
            {SERVICES.map((service, i) => (
              <ServiceTag key={i}>{service}</ServiceTag>
            ))}
          </Services>
        </ServicesContainer>
      </RightSection>
    </Section2Container>
  );
};

export default Section2;
