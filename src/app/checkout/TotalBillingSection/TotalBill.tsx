import React from "react";
import ItemCard from "./ItemCard";
import { FaArrowRight } from "react-icons/fa6";
const TotalBill = () => {
  return (
    <div className=" border p-5 px-8 mt-8 ">
      <div>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </div>
      <div className=" flex flex-col gap-3 py-6 border-b ">
        <div className=" flex justify-between items-center ">
          <p>Sub-total</p>
          <p>130$</p>
        </div>
        <div className=" flex justify-between items-center ">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className=" flex justify-between items-center ">
          <p>Discount</p>
          <p>25%</p>
        </div>
        <div className=" flex justify-between items-center ">
          <p>Tax</p>
          <p>54.76$</p>
        </div>
      </div>
      <div className=" flex justify-between items-center font-bold py-5 ">
        <p>Total</p>
        <p>432.65$</p>
      </div>
      <div>
        <button
          className=" flex rounded justify-center gap-3 items-center w-full border text-gray-700 hover:text-white hover:bg-[#FF9F0D] p-3 "
          type="submit"
        >
          <span>Place an order</span>
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default TotalBill;
