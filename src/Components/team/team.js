import React from 'react';
import TeamMember from './teamMemberCard';

const TeamContainer = () => {
	return (
		<>
		<div className="flex flex-wrap justify-evenly gap-10 items-center py-8">
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
     </div>
		</>
	);
};

export default TeamContainer;
