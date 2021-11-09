import React from "react";
import MyFaqSection from "../Components/FAQ/MyFaqAccordion";
import HeroSection from "../Components/HeroSection/HeroSection";
import TeamContainer from "../Components/team/team";

const HomeLayout = (props) => {
  return (
    <>
      <HeroSection />
      {props.children}
      <TeamContainer />
      <MyFaqSection />
    </>
  );
};

export default HomeLayout;
