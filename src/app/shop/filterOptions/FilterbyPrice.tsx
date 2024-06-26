"use client";
import React, { useState } from "react";

const FilterbyPrice = () => {
  const [pricerange, setPriceRange] = useState(0);

  const pricefilter = (e: any) => {
    e.preventDefault();
    setPriceRange(e.target.value);
  };

  return (
    <div className=" py-5 ">
      <h2 className=" font-semibold ">Filter By Price</h2>
      <div className="relative mb-6">
        <label htmlFor="labels-range-input" className="sr-only">
          Labels range
        </label>
        <input
          id="labels-range-input"
          type="range"
          value={pricerange}
          onChange={pricefilter}
          min="0"
          max="1500"
          className="w-full h-[5px] bg-gray-200 rounded-lg appearance-none cursor-pointer primaryBgcolor"
        ></input>
        {/* <input type="range" id="vol" name="vol" min="0" max="50"></input> */}
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
          0
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          {pricerange}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
          1500
        </span>
      </div>
    </div>
  );
};

export default FilterbyPrice;
