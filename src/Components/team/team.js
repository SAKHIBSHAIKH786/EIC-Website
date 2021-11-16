import React, { useState } from "react";
import TeamMembers from "./teamMemberCard";
import { TeamData } from "./teamData";
import Faculty from "./faculty.js";

const TeamContainer = () => {
  const [data] = useState(TeamData);

  return (
    <>
      <section className="container team-section">
        <div className="container flex justify-center mx-auto pt-20 pb-12">
          <h1 className="text-white text-3xl text-center">
            OUR FACULTY
          </h1>
        </div>
        <Faculty />
        <div className="container flex justify-center mx-auto pt-20">
          <h1 className="text-white text-3xl text-center pb-6">
            MEET OUR TEAM
          </h1>
        </div>

        {/* <TeamMember /> */}
        <div className="w-full mt-10 px-3 pt-3 ">
          <div className="container mx-auto">
            <div className="flex flex-wrap-reverse justify-center gap-6">
              {data.map(info => (
                <TeamMembers key={info.id} {...info} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamContainer;
