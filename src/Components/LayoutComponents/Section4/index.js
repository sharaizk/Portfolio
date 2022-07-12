import React from "react";
import { Section4Container, SectionTitle } from "./Elements";
import { realetMockup, algopixelsMockup } from "helpers/assetsaConfig";
import PortfolioItem from "Components/CustomComponents/PortfolioItem";
import { titleAnimation } from "helpers/animationHelpers";

const Section4 = () => {
  const portfolioItems = [
    {
      id: 10002,
      title: "RealEt",
      description:
        "RealEt is a real estate platform that merges different aspects to one platform. The project offers new feautres such as Virtual Tour & Cost Calculator. I Built this project using ReactJS, MongoDB, ExpressJS and NodeJS. It is currently deployed on AWS (EC2)",
      isRTL: true,
      mockup: realetMockup,
      href: "https://www.real-et.me",
      link: "www.real-et.me",
    },
    {
      id: 10003,
      title: "AlgoPixels",
      description:
        "AlgoPixels is a NFT Editor which is based upon Algorand Blockchain. I was told to built this on Vanilla JS and the UI/UX was provided by the client. It is still an ongoing project and more features are being added to it.",
      isRTL: false,
      mockup: algopixelsMockup,
      href: "https://algopixels.site/",
      link: "www.algopixels.site",
    },
  ];
  return (
    <Section4Container id="portfolio">
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        variants={titleAnimation}
        viewport={{ once: false }}
      >
        Portfolio
      </SectionTitle>
      {portfolioItems.map((item) => {
        return (
          <PortfolioItem
            key={item.id}
            title={item.title}
            description={item.description}
            isRTL={item.isRTL}
            mockup={item.mockup}
            href={item.href}
            link={item.link}
          />
        );
      })}
    </Section4Container>
  );
};

export default Section4;
