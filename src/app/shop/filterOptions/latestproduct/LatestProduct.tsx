import React from "react";
import ProductCard from "./ProductCard";

const LatestProduct = () => {
  return (
    <div>
      <h2 className=" font-semibold text-xl">Latest Product</h2>
      <div>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default LatestProduct;
