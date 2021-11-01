import React from "react";
import MyFaqSection from "../Components/FAQ/MyFaqAccordion";
import HeroCarousal from "../Components/Carousal/HeroCarousal";

const HomeLayout = (props) => {
  return (
    <>
      <HeroCarousal />
      {props.children}
      <MyFaqSection />
    </>
  );
};

export default HomeLayout;
