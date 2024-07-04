import React from "react";

import SimilarItemCarousol from "./SimilarItemCarousol";

const SimilarProducts = () => {
  return (
    <div className=" my-8 ">
      <h2 className=" font-semibold text-2xl ">Similar Products</h2>
      <div className=" flex gap-4 my-3 ">
        <SimilarItemCarousol></SimilarItemCarousol>
      </div>
    </div>
  );
};

export default SimilarProducts;
