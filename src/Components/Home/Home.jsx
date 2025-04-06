/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
// import style from "./Home.module.css";
import { counterContext } from "./../../context/counterContext";
 
import Categoriesslider from "../Categoriesslider/Categoriesslider";
import MainSlider from "../MainSlider/MainSlider";
import Recentproducts from "../RecentProducts/Recentproducts";
 

export default function Home() {
  let { counter, changeCounter } = useContext(counterContext);

  return (
    <>
      <MainSlider />
      <Categoriesslider />
      <Recentproducts />
    </>
  );
}
