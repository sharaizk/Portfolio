import React from "react";
import {
  Section5Container,
  SectionTitle,
  Subtitle,
  PlatFormContainer,
  PlatformCard,
  CardImage,
  CardTitle,
} from "./Elements";
import {
  titleAnimation,
  subtitleAnimation,
  popupContainer,
  popupAnimation,
} from "helpers/animationHelpers";
import { fiverLogo, upworkLogo, linkedinLogo } from "helpers/assetsaConfig";

const platforms = [
  {
    id: 101,
    logo: fiverLogo,
    title: "Fiverr",
    url: "https://www.fiverr.com/sharaizkhan?public_mode=true",
  },
  {
    id: 102,
    logo: upworkLogo,
    title: "Upwork",
    url: "https://www.upwork.com/freelancers/~019d0e650542acd4a4?viewMode=1",
  },
  {
    id: 103,
    logo: linkedinLogo,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sharaiz-khan-a83486206/",
  },
];

const Section6 = () => {
  return (
    <Section5Container id="contactme">
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        variants={titleAnimation}
        viewport={{ once: false }}
      >
        Ready To Start a Project?
      </SectionTitle>
      <Subtitle
        initial="hidden"
        whileInView="visible"
        variants={subtitleAnimation}
        viewport={{ once: false }}
      >
        Get your quotation today
      </Subtitle>
      <PlatFormContainer
        variants={popupContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {platforms.map((platform) => {
          return (
            <PlatformCard key={platform.id} variants={popupAnimation}>
              <a href={platform.url} target="_blank" rel="noreferrer">.</a>
              <CardImage src={platform.logo} />
              <CardTitle>{platform.title}</CardTitle>
            </PlatformCard>
          );
        })}
      </PlatFormContainer>
    </Section5Container>
  );
};

export default Section6;
