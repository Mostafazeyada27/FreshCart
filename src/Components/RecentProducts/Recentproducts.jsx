/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useContext } from "react";
import useProducts from "../../Hooks/useProducts";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
export default function Recentproducts() {
  let { addProductToCart } = useContext(CartContext);

  async function addTOCart(id) {
    let response = await addProductToCart(id);
    console.log(response);

    if ((response.data.status == "success")) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
  };
  let { data, isLoading, isError, error } = useProducts();
  if (isLoading) {
    return <div className="spinner"></div>;
  }
  return (
    <>
      {
        <div className="row">
          {data?.data?.data.map((product) => {
            return (
              <div key={product.id} className="w-1/4">
                <div className="product  my-2 p-2">
                  <Link
                    to={`productdetails/${product.id}/${product.category.name}`}
                  >
                    <img src={product?.imageCover} className="w-full" alt="" />
                    <h3 className="text-emerald-500">
                      {product.category.name}
                    </h3>
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
                  <button
                    onClick={() => {
                      addTOCart(product.id);
                    }}
                    className="btn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      }
    </>
  );
}
