"use client";
import React, { useState } from "react";
import FilterSection from "./filterSection/FilterSection";
import ParentWeithControl from "../components/ParentWeithControl";
import ShopCardContainer from "./shopitem/ShopCardContainer";
import ItemFilterOptions from "./filterOptions/ItemFilterOptions";
import { IoFilter, IoCloseSharp } from "react-icons/io5";

const Mainpage = () => {
  const [filterbtn, setFilterBtn] = useState(false);
  const filerOnOff = () => {
    setFilterBtn((privaus: any) => !privaus);
  };
  return (
    <div className=" bg-white py-8 overflow-hidden ">
      <ParentWeithControl>
        <FilterSection>
          <button
            onClick={filerOnOff}
            className=" flex md:hidden justify-center items-center gap-3 border p-2 py-1  "
          >
            <IoFilter /> Filter
          </button>
        </FilterSection>

        <div className=" relative flex justify-center items-start w-full my-5 gap-8 overflow-hidden ">
          <ShopCardContainer></ShopCardContainer>
          <ItemFilterOptions
            className={`fixed md:static top-0 z-40 ${
              filterbtn ? "right-0" : "-right-[9999px] "
            } transition-all  `}
          >
            <button
              onClick={filerOnOff}
              className={` flex text-2xl  justify-center items-center  p-2 `}
            >
              <IoCloseSharp />
            </button>
          </ItemFilterOptions>
        </div>
      </ParentWeithControl>
    </div>
  );
};

export default Mainpage;
