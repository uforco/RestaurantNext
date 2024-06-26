import React, { FC, ReactNode } from "react";

interface FilterSectionProps {
  children?: ReactNode;
}

const FilterSection: FC<FilterSectionProps> = ({ children }) => {
  return (
    <div className=" flex flex-row gap-5 lg:gap-10 justify-start items-center ">
      <div className=" flex justify-start items-center gap-2  ">
        <p className=" w-16 "> Sort By: </p>
        <select className=" px-2 border  " name="" id="">
          <option value="default">default</option>
          <option value="lowToHigh">Price (Low to High)</option>
          <option value="highToLow">Price (High to Low)</option>
        </select>
      </div>
      <div className=" hidden md:flex justify-start items-center gap-2  ">
        <p className=" w-16 "> Show: </p>
        <select className=" px-2 border  " name="" id="">
          <option value="default">default</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FilterSection;
