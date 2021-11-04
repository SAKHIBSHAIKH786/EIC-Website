import React from "react";
import FooterSectionA from "./footerSectionA";
import FooterSectionB from "./footerSectionB";
import FooterSectionC from "./footerSectionC";

const FooterSection = () => {
  return (
    <>
    <footer className="w-full mx-auto justify-center bg-purple-800 items-center mt-6">
      <FooterSectionA />
      <FooterSectionB />
      <FooterSectionC />
    </footer>
    </>
  );
};

export default FooterSection;
