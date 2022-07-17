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
  StyledPath,
} from "./Elements";
import { MdOutlineDesignServices } from "react-icons/md";
// import projectSVG from "../../../assets/images/projects.svg";
import {
  variantContainer,
  popupContainer,
  variantAnimation1,
  popupAnimation,
  circleAnimation,
} from "helpers/animationHelpers";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Sharaiz Khan</title>
        <meta
          name="services"
          content="02+ Years of Experience, 5 Projects Completed, Mobile App, Web App, Desktop App, Ui/Ux Design, SEO, DevOps"
        />
      </Helmet>
      <LeftSection
        variants={variantContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <TagContainer variants={variantAnimation1}>
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
        <StyledSVG
          width="101"
          height="116"
          viewBox="0 0 101 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={variantAnimation1}
        >
          <StyledPath
            d="M37.4044 83.3041C35.6044 83.3041 33.7044 83.2041 31.9044 83.3041C28.4044 83.5041 25.9044 85.204 24.7044 88.604C22.8044 93.804 22.7044 99.3041 23.3044 104.704C23.5044 106.804 24.0044 108.804 24.3044 110.804C24.4044 111.604 24.6044 112.404 24.6044 113.204C24.6044 114.604 23.9044 115.504 22.9044 115.804C21.6044 116.104 20.7044 115.504 20.0044 114.504C19.6044 114.004 19.3044 113.404 19.1044 112.804C15.9044 103.804 15.5044 94.604 18.8044 85.604C20.8044 80.104 25.1044 77.204 30.8044 76.604C32.8044 76.4041 35.0044 76.4041 37.0044 76.5041C45.8044 76.9041 54.1044 74.704 62.1044 71.104C66.8044 69.0041 70.4044 65.5041 73.0044 61.0041C75.8044 56.104 77.9044 50.9041 79.7044 45.7041C83.8044 34.3041 87.9044 22.8041 92.2044 11.5041C93.4044 8.40405 95.1044 5.40405 96.6044 2.50405C97.0044 1.70405 97.7044 0.904052 98.4044 0.304052C98.7044 0.00405183 99.5044 -0.0959482 99.9044 0.104052C100.304 0.304052 100.604 1.00405 100.604 1.50405C100.504 2.60405 100.404 3.70405 100.004 4.80405C98.1044 11.4041 96.1044 18.0041 94.1044 24.5041C91.6044 32.4041 89.0044 40.3041 86.4044 48.2041C84.7044 53.4041 82.6044 58.4041 80.0044 63.2041C76.3044 70.2041 70.8044 75.3041 63.5044 78.3041C55.1044 81.6041 46.5044 83.8041 37.4044 83.3041Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
          <StyledPath
            d="M7.00449 96.304C7.00449 99.104 7.00449 101.904 7.00449 104.704C7.00449 106.704 6.30449 107.904 4.80449 108.204C3.40449 108.504 2.00449 107.704 1.30449 106.004C1.00449 105.204 0.704495 104.304 0.604495 103.504C-0.495506 93.504 -0.295506 83.604 2.90449 73.904C4.80449 68.304 7.6045 63.204 11.8045 59.104C16.9045 54.104 23.0045 52.204 30.0045 53.404C33.0045 53.904 36.0045 54.604 39.0045 54.804C41.8045 55.004 44.6045 55.004 47.3045 54.604C52.8045 53.804 56.8045 50.604 59.1045 45.504C60.2045 42.904 61.0045 40.304 61.9045 37.604C65.1045 27.104 68.0045 16.604 72.0045 6.50404C72.3045 5.80404 72.5045 5.10404 72.9045 4.50404C73.2045 4.10404 73.8045 3.70404 74.2045 3.70404C74.6045 3.70404 75.2045 4.30404 75.3045 4.70404C75.6045 5.90404 75.8045 7.10404 75.7045 8.20404C75.3045 11.904 75.0045 15.504 74.2045 18.904C72.3045 26.604 70.2045 34.204 68.1045 41.804C67.7045 43.404 67.1045 45.004 66.5045 46.604C62.5045 56.704 54.7045 61.504 44.1045 62.104C39.5045 62.304 35.0045 61.304 30.6045 60.504C29.7045 60.304 28.7045 60.204 27.8045 60.004C23.9045 59.404 20.5045 60.604 17.6045 63.204C14.4045 66.004 12.2045 69.504 10.6045 73.404C8.30449 79.304 7.10449 85.404 6.90449 91.604C6.90449 93.204 6.90449 94.704 7.00449 96.304C6.90449 96.304 6.90449 96.304 7.00449 96.304Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
        </StyledSVG>
      </LeftSection>
      <RightSection>
        <ServicesContainer
          variants={popupContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <IconContainer>
            <Icon variants={circleAnimation}>
              <MdOutlineDesignServices color="#110E0F" size={40} />
            </Icon>
          </IconContainer>
          <Services>
            {SERVICES.map((service, i) => (
              <ServiceTag variants={popupAnimation} key={i}>
                {service}
              </ServiceTag>
            ))}
          </Services>
        </ServicesContainer>
      </RightSection>
    </Section2Container>
  );
};

export default Section2;
