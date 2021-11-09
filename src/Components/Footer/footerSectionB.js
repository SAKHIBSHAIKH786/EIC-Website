import React from "react";
import logo from "./logo.png";

const FooterSectionB = () => {
  return (
    <>
    <div className="py-4 mx-auto px-4 flex justify-evenly text-white items-center">
      {/*First Div */}
      <div className="rounded-full w-40 h-40">
        <img src={logo} className="rounded-full" alt="club logo" />
      </div>

      {/*Second Div */}
      <div className="text-white text-left">
        <p className="text-lg font-semibold">Navigate:</p>
        <div className="pl-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Future Events</a></li>
          <li><a href="#" className="hover:underline">Past Events</a></li>
          <li><a href="#" className="hover:underline">Team</a></li>
        </div>
      </div>

      {/*Third Div */}
      <div className="text-left">
        <p className="text-lg font-semibold pb-2">Contact Us</p>
        <p>Email: <a href="mailto:electroinfinity@gmail.com" className="hover:underline">electroinfinity@gmail.com</a></p>
        <div className="w-full border-b pb-3"></div>
        <p className="pt-2">Location: M.E.S College of Engineering,Pune</p>
        <div className="w-full border-b pb-3"></div>
      </div>
    </div>
    </>
  );
};

export default FooterSectionB;
