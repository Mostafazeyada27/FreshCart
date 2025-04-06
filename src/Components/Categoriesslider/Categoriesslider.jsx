/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
export default function Categoriesslider() {
  const [categories, setcategories] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  function getCategories() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/categories")
      .then((res) => {
        setcategories(res.data.data);
      })
      .catch((res) => {});
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h3 className="text-start text-gray-600 fw-bold my-5">
        shop popular categries
      </h3>
      <Slider {...settings} className="z-[-10]">
        {categories.map((item) => (
          <div>
            <img src={item.image} className="w-full h-[200px]" alt="" />
            <h3> {item.name}</h3>
          </div>
        ))}
      </Slider>
    </>
  );
}
