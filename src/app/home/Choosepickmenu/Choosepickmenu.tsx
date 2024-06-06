import React from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";

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
      <div className=" w-full  text-white  ">
        {/* <span>{"<"}</span> */}
        <div
          className={` text-white w-full flex gap-8 overflow-x-scroll  scroll-hidden `}
        >
          {menulist.map((menuName, inx) => (
            <button
              className=" hover:text-[#FF9F0D]  text-lg font-semibold "
              key={inx}
            >
              {menuName}
            </button>
          ))}
        </div>
        {/* <span className=" animate-ping ">{">"}</span> */}
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Choosepickmenu;
