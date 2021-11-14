import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Faq from "../Components/FAQ/FaqSection";
import Events from "./Events";
import Register from "../Components/Register/Register";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="subHeroSection">
        <Events />
        <Register />
        <Faq />
      </div>
    </>
  );
};

export default Home;
