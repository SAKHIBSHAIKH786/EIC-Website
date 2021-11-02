import React from "react";
import MyFaqSection from "../Components/FAQ/MyFaqAccordion";
import HeroCarousal from "../Components/Carousal/HeroCarousal";
import TeamContainer from "../Components/team/team";

const HomeLayout = (props) => {
  return (
    <>
      <HeroCarousal />
      {props.children}
      <TeamContainer />
      <MyFaqSection />
    </>
  );
};

export default HomeLayout;
