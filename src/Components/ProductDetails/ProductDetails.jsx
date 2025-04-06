/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
export default function ProductDetails() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  let { id, category } = useParams();
  const [product, setproduct] = useState(null);
  const [related, setrelated] = useState([]);
  function getProduct(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setproduct(res.data.data);
      })
      .catch((res) => {
        console.log(res.data.data);
      });
  }

  function AllProduct() {
    axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res) => {
      let related = res.data.data.filter(
        (product) => product.category.name === category
      );
      setrelated(related);
      console.log(related);
    });
  }
  useEffect(() => {
    getProduct(id);
    AllProduct();
  }, [id, category]);
  return (
    <>
      <div className=" row items-center">
        <div className="w-1/4">
          <Slider {...settings}>
            {product?.images.map((src) => (
              <img src={src} className="w-full" />
            ))}
          </Slider>
        </div>

        <div className="w-3/4 text-start p-5">
          <h3 className="font-semibold capitalize ">{product?.description}</h3>
          <h4 className="text-gray-500 my-2">{product?.title}</h4>
          <h4 className="my-3"> {product?.category.name}</h4>

          <div className="flex justify-between my-3 ">
            <span>{product?.price}EGP </span>
            <span>
              <i className="fas fa-star text-yellow-300"></i>
              {product?.ratingsAverage}
            </span>
          </div>
          <button className="btn">Add To Cart</button>
        </div>
      </div>
      <div className="row">
        {related.map((product) => {
          return (
            <div key={product.id} className="w-1/4">
              <div className="product  my-2 p-2">
                <Link
                  to={`/productdetails/${product.id}/${product.category.name}`}
                >
                  <img src={product.imageCover} className="w-full" alt="" />
                  <h3 className="text-emerald-500">{product.category.name}</h3>
                  <h3 className="font-semibold mb-1">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h3>

                  <div className="flex justify-between p-3">
                    <span>{product.price}EGP </span>
                    <span>
                      <i className="fas fa-star text-yellow-500"></i>
                      {product.ratingsAverage}
                    </span>
                  </div>
                </Link>
                <button className="btn">Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
