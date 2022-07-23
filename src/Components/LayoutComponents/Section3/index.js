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
import { titleAnimation, popupAnimation } from "helpers/animationHelpers";
import { Helmet } from "react-helmet";
import { AnimatePresence, motion } from "framer-motion";
const TechStackArray = [
  {
    id: 301,
    title: "React JS",
    logo: reactLogo,
    size: "100%",
    left: "80%",
    description:
      "Being the most popular web framework, React Js provides us with a variety of flexible libraries, tools, and ecosystems to build large-scale applications for my clients",
    banner: "#00D8FF",
    transform: "75deg",
  },
  {
    id: 302,
    title: "Vue JS",
    logo: vueLogo,
    size: "100%",
    left: "80%",
    description:
      'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
    banner: "#3FB883",
    transform: "15deg",
  },
  {
    id: 303,
    title: "React Native",
    logo: reactLogo,
    size: "100%",
    left: "80%",
    description:
      "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP",
    banner: "#00D8FF",
    transform: "75deg",
  },
  {
    id: 304,
    title: "Next Js",
    logo: nextLogo,
    size: "100%",
    left: "80%",
    description:
      "Unleashing the power of Server-Side Rendering in React applications, Next Js helps in indexing the content faster, resulting in SEO friendly web apps for my clients",
    banner: "#000000",
    transform: "20deg",
  },
  {
    id: 305,
    title: "Node JS",
    logo: nodeLogo,
    size: "100%",
    left: "85%",
    description:
      "Being one of the most used backend frameworks of the time, Node Js enables us to create small to large scale software solutions for majority of my clients",
    banner: "#56A343",
    transform: "5deg",
  },
  {
    id: 306,
    title: "Express Js",
    logo: expressLogo,
    size: "100%",
    left: "80%",
    description:
      "Express.js, or simply Express, is a back end web application framework for Node.js",
    banner: "#000000",
    transform: "10deg",
  },
  {
    id: 307,
    title: "Mongo DB",
    logo: mongoLogo,
    size: "90%",
    left: "80%",
    description:
      "MongoDB is a NoSQL database which I often use in combination with Node.js for majority of my apps",
    banner: "#429933",
    transform: "15deg",
    bottom: "-80%",
  },
  {
    id: 308,
    title: "MySQL",
    logo: sqlLogo,
    size: "100%",
    left: "80%",
    description:
      "Being one of the most popular database solutions of all time, MySQL proves to be very efficient for large applications",
    banner: "#01668E",
    bottom: "-70%",
    transform: "15deg",
  },
  {
    id: 309,
    title: "Amazon Web Services",
    logo: awsLogo,
    size: "100%",
    left: "85%",
    description:
      "Amazon Web Services allows us to provide customised solutions to clients interested in large-scale yet cost-effective solutions",
    banner: "#FF9900",
    bottom: "-90%",
    transform: "20deg",
  },
  {
    id: 310,
    title: "Docker",
    logo: dockerLogo,
    size: "100%",
    left: "80%",
    description:
      "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers",
    banner: "#079CEC",
    transform: "20deg",
  },
  {
    id: 311,
    title: "Postman",
    logo: postmanLogo,
    size: "100%",
    left: "85%",
    description:
      "Postman is an API platform for developers to design, build, test and iterate their APIs",
    banner: "#F05A24",
    transform: "15deg",
  },
  {
    id: 312,
    title: "NginX",
    logo: nginxLogo,
    size: "100%",
    left: "80%",
    description:
      "NGINX is a free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server",
    banner: "#0A974D",
    transform: "10deg",
  },
];

const Section3 = () => {
  return (
    <Section3Container id="techstack">
      <Helmet>
        <meta
          name="My Technology Stack"
          content="React JS
          Being the most popular web framework, React Js provides us with a variety of flexible libraries, tools, and ecosystems to build large-scale applications for my clients, Vue JS
          Vue.js (commonly referred to as Vue; pronounced 'view') is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.
          React Native
          React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP.
          Next Js
          Unleashing the power of Server-Side Rendering in React applications, Next Js helps in indexing the content faster, resulting in SEO friendly web apps for my clients.
          Node JS
          Being one of the most used backend frameworks of the time, Node Js enables us to create small to large scale software solutions for majority of my clients.
          Express Js
          Express.js, or simply Express, is a back end web application framework for Node.js.
          Mongo DB
          MongoDB is a NoSQL database which I often use in combination with Node.js for majority of my apps
          MySQL
          Being one of the most popular database solutions of all time, MySQL proves to be very efficient for large applications.
          Amazon Web Services
          Amazon Web Services allows us to provide customised solutions to clients interested in large-scale yet cost-effective solutions.
          Docker
          Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.
          Postman
          Postman is an API platform for developers to design, build, test and iterate their APIs
          NginX
          NGINX is a free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server
          "
        />
      </Helmet>
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        variants={titleAnimation}
        viewport={{ once: false }}
      >
        My Technology Stack
      </SectionTitle>
      <TechStackContainer>
        <AnimatePresence exitBeforeEnter>
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
                transform={stack?.transform}
                bottom={stack?.bottom}
              />
            );
          })}
        </AnimatePresence>
      </TechStackContainer>
    </Section3Container>
  );
};

export default Section3;
