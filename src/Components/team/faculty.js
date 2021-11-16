import React from "react";
import "./faculty.css";

const Faculty = () => {
	return (
		<>
			<section className="container mb-12">
				<div className="faculty-container">
					<div className="faculty-card">
						<div className="faculty-image-container">
							<img
								className="faculty-image"
								src="https://github.com/Electro-Infinity-Club/Team-Member-Images/blob/master/faculty/Prof-KS-Tiwari.jpg?raw=true"
								alt="professor"
							/>
						</div>
						<div className="faculty-content">
							<h1 className="faculty-name text-club-900">
								Dr. K.S.Tiwari
							</h1>
							<p className="text-base font-normal text-club-700">
								Dr K.S.Tiwari completed her graduation in 1999 from RKN and MTECH from VNIT NAGPUR. 
								She completed her PhD from VNIT NAGPUR and has more than 20 years of teaching experience. 
								She is a life member of several reputed bodies like ISTE, IETE, IAENG, RST and has credit to publications in several reputed journals. 
								She has received a grant of 1.5 lacs from BCUD in 2012-14. Her area of expertise is VLSI, Digital Design and Rough set theory.
							</p>
						</div>
					</div>

					<div className="faculty-card">
						<div className="faculty-image-container">
							<img
								className="faculty-image"
								src="https://github.com/Electro-Infinity-Club/Team-Member-Images/blob/master/faculty/Prof-Yogita-Ajgar.jpg?raw=true"
								alt="professor"
							/>
						</div>
						<div className="faculty-content">
							<h1 className="faculty-name text-club-900">
								Prof. Yogita Ajgar
							</h1>
							<p className="text-base font-normal text-club-700">
								Dr. K.S.Tiwari completed her graduation in 1999 from RKN and MTECH from VNIT NAGPUR. 
								She completed her PhD from VNIT NAGPUR and has more than 20 years of teaching experience. 
								She is a life member of several reputed bodies like ISTE, IETE, IAENG, RST and has credit to publications in several reputed journals. 
								She has received a grant of 1.5 lacs from BCUD in 2012-14. Her area of expertise is VLSI, Digital Design and Rough set theory.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Faculty;
