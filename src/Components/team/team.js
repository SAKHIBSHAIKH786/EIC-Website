import React, { useState } from "react";
import TeamMembers from "./teamMemberCard";
import { TeamData } from "./teamData";

const TeamContainer = () => {

	const [data, setData] = useState(TeamData);

  return (
    <>
      <section className="container" id="team-section">
        <div className="container flex justify-center mx-auto pt-16">         
          <h2 className="text-white text-2xl text-center pb-6">
            MEET OUR TEAM
          </h2>       
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
      </section>
    </>
  );
};

export default TeamContainer;
