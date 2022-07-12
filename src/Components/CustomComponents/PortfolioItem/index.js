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
const PortfolioItem = ({ title, description, isRTL, mockup, href, link }) => {
  return (
    <PortfolioContainer>
      {isRTL && (
        <TextSection>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <PortfolioLink href={href} target="_blank">
            {link}
          </PortfolioLink>
        </TextSection>
      )}
      <ImageSection>
        <Image src={mockup} alt="mockup" />
      </ImageSection>
      {!isRTL && (
        <TextSection>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <PortfolioLink href={href} target="_blank">
            {link}
          </PortfolioLink>
        </TextSection>
      )}
    </PortfolioContainer>
  );
};

export default PortfolioItem;
