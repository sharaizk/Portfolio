import React, { lazy, Suspense } from "react";
import "./index.css";
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>TheCodeBro</title>
          <link rel="canonical" href="https://www.thecodebro.com" />
        </Helmet>
        <Suspense fallback={<LoadingScreen />}>
          <Header />
          <LandingScreen />
        </Suspense>
    </>
  );
}

export default App;
