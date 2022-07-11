import React from "react";
import {
  Section3Container,
  SectionTitle,
  TechStackContainer,
} from "./Elements";
import StackCard from "Components/CustomComponents/StackCard";
import {
  reactLogo,
  awsLogo,
  dockerLogo,
  expressLogo,
  mongoLogo,
  sqlLogo,
  nextLogo,
  nginxLogo,
  nodeLogo,
  postmanLogo,
  vueLogo,
} from "helpers/assetsaConfig";
const TechStackArray = [
  {
    id: 1,
    title: "React JS",
    logo: reactLogo,
    size: "25%",
    left: "-100%",
    description:
      "Being the most popular web framework, React Js provides us with a variety of flexible libraries, tools, and ecosystems to build large-scale applications for our clients",
    banner: "#00D8FF",
  },
  {
    id: 2,
    title: "Vue JS",
    logo: vueLogo,
    size: "25%",
    left: "-99%",
    description:
      'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
    banner: "#3FB883",
  },
  {
    id: 3,
    title: "React Native",
    logo: reactLogo,
    size: "25%",
    left: "-100%",
    description:
      "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP",
    banner: "#00D8FF",
  },
  {
    id: 4,
    title: "Next Js",
    logo: nextLogo,
    size: "17%",
    left: "-100%",
    description:
      "Unleashing the power of Server-Side Rendering in React applications, Next Js helps in indexing the content faster, resulting in SEO friendly web apps for our clients",
    banner: "#000000",
  },
  {
    id: 5,
    title: "Node JS",
    logo: nodeLogo,
    size: "30%",
    left: "-50%",
    description:
      "Being one of the most used backend frameworks of the time, Node Js enables us to create small to large scale software solutions for majority of my clients",
    banner: "#56A343",
  },
  {
    id: 6,
    title: "Express Js",
    logo: expressLogo,
    size: "40%",
    left: "-40%",
    description:
      "Express.js, or simply Express, is a back end web application framework for Node.js",
    banner: "#000000",
  },
  {
    id: 7,
    title: "Mongo DB",
    logo: mongoLogo,
    size: "20%",
    left: "-100%",
    description:
      "MongoDB is a NoSQL database which we often use in combination with Node.js for majority of our apps",
    banner: "#429933",
  },
  {
    id: 8,
    title: "MySQL",
    logo: sqlLogo,
    size: "25%",
    left: "-50%",
    description:
      "Being one of the most popular database solutions of all time, MySQL proves to be very efficient for large applications",
    banner: "#01668E",
  },
  {
    id: 9,
    title: "Amazon Web Services",
    logo: awsLogo,
    size: "17.5%",
    left: "-60%",
    description:
      "Amazon Web Services allows us to provide customised solutions to clients interested in large-scale yet cost-effective solutions",
    banner: "#FF9900",
  },
  {
    id: 10,
    title: "Docker",
    logo: dockerLogo,
    size: "20%",
    left: "-50%",
    description:
      "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers",
    banner: "#079CEC",
  },
  {
    id: 11,
    title: "Postman",
    logo: postmanLogo,
    size: "12.5%",
    left: "-70%",
    description:
      "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers",
    banner: "#F05A24",
  },
  {
    id: 12,
    title: "NginX",
    logo: nginxLogo,
    size: "50%",
    left: "-35%",
    description:
      "NGINX is a free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server",
    banner: "#0A974D",

  },
];

const Section3 = () => {
  return (
    <Section3Container>
      <SectionTitle>My Technology Stack</SectionTitle>
      <TechStackContainer>
        {TechStackArray.map((stack) => {
          return (
            <StackCard
              key={stack.id}
              bgSize={stack.size}
              title={stack.title}
              logo={stack.logo}
              left={stack.left}
              description={stack.description}
              banner={stack?.banner}
            />
          );
        })}
      </TechStackContainer>
    </Section3Container>
  );
};

export default Section3;
