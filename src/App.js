import React from "react";
import "./index.css";
import LandingScreen from "./Screens/LandingScreen";
import Header from "./Components/LayoutComponents/Header";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <AnimatePresence>
        <Header />
        <LandingScreen />
      </AnimatePresence>
    </>
  );
}

export default App;
