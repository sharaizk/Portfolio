import React, { lazy, Suspense } from "react";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import LoadingScreen from "Screens/Loading";
function App() {
  const LandingScreen = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("Screens/LandingScreen")), 3000);
    });
  });
  const Header = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(import("Components/LayoutComponents/Header")),
        3000
      );
    });
  });
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Helmet key={2000}>
          <meta charSet="utf-8" />
          <title>TheCodeBro</title>
          <link rel="canonical" href="https://www.thecodebro.com" />
        </Helmet>
        <Suspense fallback={<LoadingScreen />}>
          <Header key={2001} />
          <LandingScreen key={2002} />
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
