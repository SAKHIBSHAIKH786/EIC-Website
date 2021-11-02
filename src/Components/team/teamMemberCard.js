import React from "react";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

const TeamMembers = ({fname,lname,post,image,bio}) => {

	return (
		<>
		<div className="relative w-1/4 my-12">
			<div className="rounded overflow-hidden shadow-md bg-white">
	      <div className="absolute -mt-20 w-full flex justify-center">
	        <div className="h-36 w-36">
	          <img
	            src={image}
	            alt="team member"
	            className="rounded-full object-cover object-top h-full w-full shadow-md"
	          />
	        </div>
	      </div>
	      <div className="px-6 mt-16 mx-2 flex flex-col items-center text-center">
	        <div className="font-bold text-3xl pb-1">
	          <h1>{fname}</h1>
	          <h1>{lname}</h1>
	        </div>
	        <p className="text-gray-800 text-lg italic">
	          {post}
	        </p>
	        <p className="text-gray-600 text-base pt-3 font-normal">
	          {bio}
	        </p>
	        <div className="w-full flex justify-center pt-5 pb-5 gap-6 text-xl">
	          <FiFacebook className="cursor-pointer hover:text-blue-400"/>
	          <FiInstagram className="cursor-pointer hover:text-blue-400"/>
	          <FiLinkedin className="cursor-pointer hover:text-blue-400"/>
	        </div>
	      </div>
	    </div>
	  </div>
		</>
	);
};

export default TeamMembers;
