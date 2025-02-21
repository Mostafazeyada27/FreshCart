// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import slider1 from "../../assets/slider-image-1.jpeg";
import slider2 from "../../assets/slider-image-2.jpeg";
import slider3 from "../../assets/slider-image-3.jpeg";
import slider4 from "../../assets/grocery-banner.png";
import slider5 from "../../assets/slider-2.jpeg";
export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <div className="row ">
        <div className="w-3/4">
          <Slider {...settings} className="z-[-10] ">
            <img src={slider1} className="w-full h-[400px]" alt="" />
            <img src={slider4} className="w-full h-[400px]" alt="" />
            <img src={slider5} className="w-full h-[400px]" alt="" />
          </Slider>
        </div>
        <div className="w-1/4">
          <img src={slider2} className="w-full h-[200px]" alt="" />
          <img src={slider3} className="w-full h-[200px]" alt="" />
        </div>
      </div>
    </>
  );
}
