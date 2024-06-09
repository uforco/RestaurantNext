import React from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";
import HorizontalNavScroll from "./../../components/ui/hsm/HorizontalNavScroll";
import HorizontalNavItem from "./../../components/ui/hsm/HorizontalNavItem";

const Choosepickmenu = () => {
  const menulist = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Snack",
    "Suops",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Snack",
    "Suops",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Snack",
    "Suops",
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
      <div className=" w-full  text-white ">
        {/* <span>{"<"}</span> */}
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
        {/* <span className=" animate-ping ">{">"}</span> */}
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Choosepickmenu;
