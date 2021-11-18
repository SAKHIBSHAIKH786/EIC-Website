import React from "react";
import Slider from "react-slick";
import LesserSign from "./lesser_sign.svg"
import GreaterSign from "./greater_sign.svg";
import mission from "./Mission.png";
import objective from "./Objective.png";
import vision from "./Vision.png";
 

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function AboutClub() {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LesserSign} alt="prevArrow"  {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={GreaterSign} alt="nextArrow" {...props} />
  );
    const settings = {
        arrows:true,
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    };
    return (
    <>
   <div className="hidden md:block ">
   <Slider {...settings} >
  <div className="bg-blue-800 h-68">
  <div className="px-12 pt-4 gap-2 flex lg:px-16 lg:pt-6 lg:gap-4">
  <img className="py-2 w-60 h-40 items-center lg:w-80 lg:h-60" src={vision} alt="Vision"/>
     <div className="flex flex-col">
     <h3 className="text-3xl text-white font-semibold mx-auto text-center underline lg:text-5xl">Vision</h3>
     <p className="text-lg px-2 py-2 font-semibold text-center text-green-100 lg:px-6 lg:text-3xl lg:pt-6">Let's together build and develop a practical skillset in electronics  which will help us further to solve real world problems</p>
       </div> 
     </div>
    </div>  
    <div className="bg-blue-800 h-68">
  <div className="px-12 pt-4 gap-2 flex lg:px-16 lg:pt-6 lg:gap-4">
  <img className="py-2 w-60 h-40 items-center lg:w-80 lg:h-60" src={mission} alt="Mission" />
     <div className="flex flex-col">
     <h3 className="text-3xl text-white font-semibold mx-auto text-center underline lg:text-5xl">Mission</h3>
     <p className="text-lg px-2 py-2 font-semibold text-center text-green-100 lg:px-6 lg:text-3xl lg:pt-6">The mission of our club is to offer qualitative electronics knowledge through innovative methods of learning with practical orientation to help students have a better career</p>
       </div> 
     </div>
    </div>
    <div className="bg-blue-800 h-68">
  <div className="px-12 pt-4 gap-2 flex lg:px-16 lg:pt-6 lg:gap-4">
  <img className="py-2 w-60 h-40 items-center lg:w-80 lg:h-60" src={objective} alt="Objective" />
     <div className="flex flex-col">
     <h3 className="text-3xl text-white font-semibold mx-auto text-center underline lg:text-5xl">Objective</h3>
     <p className="text-lg px-2 py-2 font-semibold text-center text-green-100 lg:px-6 lg:text-3xl lg:pt-6">The objective of our club is to promote and engage individuals in developing their practical skills and to help them improve their abilities and experience in real world projects</p>
       </div> 
     </div>
    </div>  
        </Slider>
   </div>
      {/* For small Screen */}
   <div className="md:hidden">
       <div className="bg-gray-800">
       <h3 className="text-3xl text-blue-500 text-center font-extrabold pt-2">Our Club's</h3>
     <div className="bg-gray-800 block justify-center mx-auto">
         <h3 className="py-1 text-2xl font-bold text-white text-center">Vision</h3> 
         <p className="text-md px-2 pb-1 text-green-200 text-center">Let's together build and develop a practical skillset in electronics  which will help us further to solve real world problems</p>
     </div>
     <div className="bg-gray-800 block justify-center mx-auto">
         <h3 className="py-1 text-2xl font-bold text-white text-center">Mission</h3> 
         <p className="text-md px-2 pb-1 text-green-200 text-center">The mission of our club is to offer qualitative electronics knowledge through innovative methods of learning with practical orientation which will help students to have a better career</p>
     </div>
     <div className="bg-gray-800 block justify-center mx-auto">
         <h3 className="py-1 text-2xl font-bold text-white text-center">Objective</h3> 
         <p className="text-md px-2 pb-1 text-green-200 text-center">The objective of our club is to promote and engage individuals in developing their practical skills and to help them improve their abilities and experience in real world projects</p>
     </div>
       </div>
   </div>
     </>  
    );
  }