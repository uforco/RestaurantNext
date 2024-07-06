import React from "react";
import ProductDetails from "./ProductDetails";

const Productlist = () => {
  return (
    <div className=" w-full overflow-x-scroll sm:overflow-hidden py-10 scrollberContainer ">
      <table className=" w-[720px] sm:w-full ">
        <thead>
          <tr className="text-center   ">
            <th className=" py-2 text-left ">Product</th>
            <th className=" py-2 ">Price</th>
            <th className=" py-2 ">Quantity</th>
            <th className=" py-2 ">Total</th>
            <th className=" py-2 ">Remove</th>
          </tr>
        </thead>
        <tbody>
          <ProductDetails></ProductDetails>
          <ProductDetails></ProductDetails>
          <ProductDetails></ProductDetails>
          <ProductDetails></ProductDetails>
          <ProductDetails></ProductDetails>
        </tbody>
      </table>
    </div>
  );
};

export default Productlist;
