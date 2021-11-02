import HeroSlider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = (props) => {
	return (
		<>
			<div className="h-96 rounded-md">
				<img src={props.src} className="w-full h-full rounded-md" alt="Image" />
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
	    autoplay: true
	};

	return (
		<div className="my-4">
		<HeroSlider {...settings}>
			{CarousalImages.map((image) => (
				<Carousal key={image} src={image} />
			))}
		</HeroSlider>
		</div>
	);
};

export default HeroCarousal;
