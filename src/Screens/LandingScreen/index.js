import React from "react";
import Section1 from "Components/LayoutComponents/Section1";
import FollowMe from "Components/LayoutComponents/FollowMe";
import Section2 from "Components/LayoutComponents/Section2";
import Section3 from "Components/LayoutComponents/Section3";
import Section4 from "Components/LayoutComponents/Section4";
import Section5 from "Components/LayoutComponents/Section5";
import Section6 from "Components/LayoutComponents/Section6";
import Footer from "Components/LayoutComponents/Footer";
import Divider from "Components/CustomComponents/Divider";
import { AnimatePresence } from "framer-motion";

const LandingScreen = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Section1 key={2000} />
        <FollowMe key={2001} />
        <Section2 key={2002} />
        <Divider key={2007} />
        <Section3 key={2003} />
        <Section4 key={2004} />
        <Divider key={2008} />
        <Section5 key={2005} />
        <Divider key={2009} />
        <Section6 key={2006} />
        <Footer key={2010} />
      </AnimatePresence>
    </>
  );
};

export default LandingScreen;
