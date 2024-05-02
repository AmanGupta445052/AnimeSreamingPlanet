

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft , FaChevronRight } from "react-icons/fa";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliding = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div className="absolute  w-screen inset-0  z-0">
      <Slider ref={sliderRef} {...settings}>
       
        <div className="w-full h-[600x] bg-gray-300">
          <img className="h-[600px] w-screen overflow-hidden" src="/images/anime.jpg" alt="image description"/>
        </div>
        <div className="w-full h-[600px] bg-gray-300">
          <img className="h-[600px] w-screen overflow-hidden" src="/images/slider_img2.jpg" alt="image description"/>
        </div>
        <div className="w-full h-[600px] bg-gray-300">
        <img className="h-[600px] w-screen overflow-hidden" src="/images/slider_img3.jpg" alt="image description"/>    
    </div>
       
      </Slider>
      
      <button
      className="absolute text-4xl text-[#265073] top-72  transform -translate-y-1/2 bg-opacity-0   rounded-md"
      onClick={() => sliderRef.current.slickPrev()}
    >
      <FaChevronLeft/>
    </button>
    <button
      className="absolute text-[#265073] fill-red-400 text-4xl top-72 right-4 transform -translate-y-1/2 bg-opacity-0  p-2 rounded-md"
      onClick={() => sliderRef.current.slickNext()}
    >
      <FaChevronRight/>
    </button>
      
     
    </div>
  );
};

export default Sliding;
