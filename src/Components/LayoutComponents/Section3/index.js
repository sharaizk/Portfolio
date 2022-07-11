import React from "react";
import {
  Section3Container,
  SectionTitle,
  TechStackContainer,
} from "./Elements";
import StackCard from "Components/CustomComponents/StackCard";

const TechStackArray = [
  {
    id: 1,
    title: "ReactJS",
  },
  {
    id: 2,
    title: "VueJS",
  },
  {
    id: 3,
    title: "React Native",
  },
  {
    id: 4,
    title: "Next Js",
  },
  {
    id: 5,
    title: "NodeJS",
  },
  {
    id: 6,
    title: "Express Js",
  },
  {
    id: 7,
    title: "Mongo DB",
  },
  {
    id: 8,
    title: "MySQL",
  },
  {
    id: 9,
    title: "Amazon Web Services",
  },
  {
    id: 10,
    title: "Docker",
  },
  {
    id: 11,
    title: "Postman",
  },
  {
    id: 12,
    title: "NginX",
  },
];

const Section3 = () => {
  return (
    <Section3Container>
      <SectionTitle>My Technology Stack</SectionTitle>
      <TechStackContainer>
        <StackCard title="ReactJS" />
        <StackCard title="VueJS" />
        <StackCard title="NextJS" />
        <StackCard title="React Native" />
        <StackCard title="NodeJS" />
        <StackCard title="ExpressJS" />
        <StackCard title="Mongo DB" />
        <StackCard title="MySQL" />
        <p>AWS</p>
        <p>Docker</p>
        <p>Postman</p>
        <p>NGINX</p>
      </TechStackContainer>
    </Section3Container>
  );
};

export default Section3;
