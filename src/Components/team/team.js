import React, { useState } from "react";
import TeamMembers from "./teamMemberCard";
import { TeamData } from "./teamData";

const TeamContainer = () => {

	const [data, setData] = useState(TeamData);

  return (
    <>
      <div className="container">
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <p className="text-white text-lg text-center font-normal pb-3">
              MEET OUR TEAM
            </p>
            <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              The Talented People Behind the Scenes of the Club
            </h1>
          </div>
        </div>

        {/* <TeamMember /> */}
        <div className="w-full mt-10 px-3 pt-3 ">
          <div className="container mx-auto">
          	<div className="flex flex-wrap-reverse justify-center gap-6">
            	{data.map((info) => (
								<TeamMembers key={info.id} {...info} />
							))}
    				</div>
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
	        <div className="py-5">
	          <div className="border-b border-gray-200" />
	        </div>
      	</div>
      </div>
    </>
  );
};

export default TeamContainer;
