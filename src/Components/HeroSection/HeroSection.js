import React from 'react';
import HeroCarousal from '../Carousal/HeroCarousal';

const HeroSection = () => {
	return (
		<>
		<div className="flex gap-2 my-8">
			<div className="bg-gray-500 text-4xl font-semibold text-white text-center">
				<p className="py-4">Welcome to Electro Infinity Club!</p>
				<p className="text-2xl py-2">Arnav is a bad person. Very very Bad Person. Arnav is a bad person. Very very Bad Person.</p>
			</div>
			<HeroCarousal />
		</div>
		</>
	);
};

export default HeroSection;
