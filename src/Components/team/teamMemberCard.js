import React, { useState } from "react";
import { Modal } from "./teamModal";
import arnav from "./arnav.jpeg";

const TeamMembers = () => {

	const [ showModal, setShowModal ] = useState(false);

	return (
		<>
		<div className="flex flex-col items-center h-64 w-44 bg-white gap-5 rounded-lg border-2 border-white shadow-lg">
			<div className="pattern h-1/2 w-full bg-card-200 rounded-t-lg">
				<img src="https://raw.githubusercontent.com/Electro-Infinity-Club/Team-Member-Images/master/arnav.jpg"
					className="h-full w-32 m-auto rounded-full shadow-md object-cover object-top bg-white border border-white" />
			</div>

			<div className="text-center">
				<h1 className="text-lg">Arnav Botre</h1>
				<h3 className="text-md italic">President</h3>
			</div>

			<button className="hover:bg-blue-500 text-blue-600 hover:text-white px-1 pb-0.5 rounded shadow"
        onClick={() => setShowModal(true)}>
			  Know more
			</button>			
		</div>
		<Modal showModal={showModal} setShowModal={setShowModal} />
		</>
	);
};

export default TeamMembers;
