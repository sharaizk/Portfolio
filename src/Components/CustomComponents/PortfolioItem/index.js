import React from "react";
import {
  PortfolioContainer,
  TextSection,
  ImageSection,
  Image,
  Title,
  Description,
  PortfolioLink,
} from "./Elements";
import {
  variantContainer,
  variantAnimation1,
  variantAnimation2,
} from "helpers/animationHelpers";
const PortfolioItem = ({ title, description, isRTL, mockup, href, link }) => {
  return (
    <PortfolioContainer>
      {isRTL && (
        <TextSection
          variants={variantContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Title variants={variantAnimation1}>{title}</Title>
          <Description variants={variantAnimation1}>{description}</Description>
          <PortfolioLink
            href={href}
            target="_blank"
            variants={variantAnimation1}
          >
            {link}
          </PortfolioLink>
        </TextSection>
      )}
      <ImageSection
        variants={variantContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Image
          src={mockup}
          variants={!isRTL ? variantAnimation1 : variantAnimation2}
          alt="mockup"
        />
      </ImageSection>
      {!isRTL && (
        <TextSection
          variants={variantContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Title variants={variantAnimation2}>{title}</Title>
          <Description variants={variantAnimation2}>{description}</Description>
          <PortfolioLink
            href={href}
            target="_blank"
            variants={variantAnimation2}
          >
            {link}
          </PortfolioLink>
        </TextSection>
      )}
    </PortfolioContainer>
  );
};

export default PortfolioItem;
