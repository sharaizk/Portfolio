import React from "react";
import "./index.css";
import LandingScreen from "./Screens/LandingScreen";
import Header from "./Components/LayoutComponents/Header";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Helmet key={2000}>
          <meta charSet="utf-8" />
          <title>TheCodeBro</title>
          <link rel="canonical" href="https://www.thecodebro.com" />
        </Helmet>
        <Header key={2001} />
        <LandingScreen key={2002} />
      </AnimatePresence>
    </>
  );
}

export default App;
