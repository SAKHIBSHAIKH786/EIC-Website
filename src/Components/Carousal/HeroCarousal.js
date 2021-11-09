import HeroSlider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = (props) => {
	return (
		<>
			<div className="rounded-md p-1">
				<img src={props.src} className="w-full h-full rounded-md" />
			</div>
		</>
	);
};

const HeroCarousal = () => {

	const CarousalImages = [
		"https://wallpapercave.com/wp/wp5545640.jpg",
		"https://wallpapercave.com/wp/wp2587127.jpg",
		"https://wallpapercave.com/wp/ZlwPHMV.jpg"
	];

	const settings = {
		dots: true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    arrows: false
	};

	return (
		<div className="slide-container border-2 border-white rounded-md">
		<HeroSlider {...settings}>
			{CarousalImages.map((image) => (
				<Carousal key={image} src={image} />
			))}
		</HeroSlider>
		</div>
	);
};

export default HeroCarousal;
