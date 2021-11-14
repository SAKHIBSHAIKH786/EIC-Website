import React from "react";
import { FiInstagram, FiMail, FiLinkedin } from "react-icons/fi";

const TeamMembers = ({
  fname,
  lname,
  post,
  image,
  bio,
  instagram,
  linkedin,
  email,
}) => {
  return (
    <>
      <div className="relative w-1/4 my-12">
        <div className="rounded overflow-hidden shadow-md bg-club-50">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-36 w-36">
              <img
                src={image}
                alt="team member"
                className="member-image rounded-full object-cover object-top h-full w-full"
              />
            </div>
          </div>
          <div className="px-6 mt-16 mx-2 flex flex-col items-center text-center">
            <div className="font-bold text-3xl pb-1 text-club-900">
              <h1>{fname}</h1>
              <h1>{lname}</h1>
            </div>
            <p className="text-club-800 text-lg italic">{post}</p>
            <p className="text-club-700 text-base pt-3 font-normal">{bio}</p>
            <div className="w-full flex justify-center py-5 gap-6 text-xl">
              <a
                href={"mailto:" + email}
                className="team-social cursor-pointer hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMail />
              </a>
              <a
                href={instagram}
                className="team-social cursor-pointer hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a
                href={linkedin}
                className="team-social cursor-pointer hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
