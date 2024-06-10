import React from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";
import HorizontalNavScroll from "./../../components/ui/hsm/HorizontalNavScroll";
import HorizontalNavItem from "./../../components/ui/hsm/HorizontalNavItem";
import Image from "next/image";
import manuimg from "@/assets/image/choosepickleft.png";
import MenuItem from "./item/MenuItem";

const Choosepickmenu = () => {
  const menulist = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Snack",
    "Suops",
  ];

  return (
    <div>
      <div className=" flex justify-center items-center text-white ">
        <div className=" text-center py-3 ">
          <GreatVibesHeading>Choose & pick</GreatVibesHeading>
          <SubTitel>From Our Menu</SubTitel>
        </div>
      </div>
      {/* horizontal-scroll-manu */}
      <div className=" w-full  text-white py-10 pt-3 ">
        <HorizontalNavScroll>
          {menulist.map((manu, inx) => (
            <HorizontalNavItem
              className=" hover:text-[#f8a527] font-bold lowercase "
              key={inx}
            >
              {manu}
            </HorizontalNavItem>
          ))}
        </HorizontalNavScroll>
      </div>
      <div>
        <div className=" flex flex-col lg:flex-row gap-2 ">
          <div className=" w-full lg:w-4/12 flex justify-center items-center ">
            <div className=" p-4 ">
              <Image src={manuimg} alt=""></Image>
            </div>
          </div>
          <div className=" w-full lg:w-8/12 gap-4 grid grid-cols-1 md:grid-cols-2 py-3 ">
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choosepickmenu;
