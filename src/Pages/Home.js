import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Faq from "../Components/FAQ/FaqSection";
import Events from "./Events";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Events />
      <Faq />
    </>
  );
};

export default Home;
