import Link from "next/link";
import React from "react";
import SingleTags from "./SingleTags";

const ProductTags = () => {
  return (
    <div className=" py-3 ">
      <h2 className=" font-semibold text-xl ">Product Tags</h2>
      <ul className=" -m-3 mt-[2px] ">
        <SingleTags>Service</SingleTags>
        <SingleTags>Our Menu</SingleTags>
        <SingleTags>pizza</SingleTags>
        <SingleTags>Burger</SingleTags>
        <SingleTags>Cupcake</SingleTags>
        <SingleTags>Cookies</SingleTags>
        <SingleTags>Our Shop</SingleTags>
        <SingleTags>Tandoori Chicken</SingleTags>
      </ul>
    </div>
  );
};

export default ProductTags;
