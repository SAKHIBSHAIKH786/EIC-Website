import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const FooterSectionB = () => {
  return (
    <>
      <div className="py-4 mx-auto px-4 flex justify-evenly text-white items-center">
        <div className="rounded-full w-40 h-40">
          <img src={logo} className="rounded-full" alt="club logo" />
        </div>
        <div className="text-white text-left">
          <p className="text-lg font-semibold">Navigate:</p>
          <div className="pl-4">
            <li className="list-none">
              <Link to="/" className="hover:underline ">
                Home
              </Link>
            </li>
            <li className="list-none">
              <Link to="/events" className="hover:underline ">
                Events
              </Link>
            </li>
            <li className="list-none">
              <Link to="/team" className="hover:underline ">
                Team
              </Link>
            </li>
            <li className="list-none">
              <Link to="/contact" className="hover:underline ">
                Contact
              </Link>
            </li>
          </div>
        </div>
        <div className="text-left">
          <p className="text-lg font-semibold pb-2">Contact Us</p>
          <p>
            Email:{" "}
            <a
              href="mailto:electroinfinity@gmail.com"
              className="hover:underline"
            >
              electroinfinity@gmail.com
            </a>
          </p>
          <div className="w-full border-b pb-3"></div>
          <p className="pt-2">Location: M.E.S College of Engineering,Pune</p>
          <div className="w-full border-b pb-3"></div>
        </div>
      </div>
    </>
  );
};

export default FooterSectionB;
