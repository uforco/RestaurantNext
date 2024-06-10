import React from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";
import ChefsProfile from "./chefsProfile/ChefsProfile";

const Chefs = () => {
  return (
    <div className=" w-full ">
      <div className=" w-full flex justify-center items-center text-white py-10 mt-10 ">
        <div className=" text-center py-3 ">
          <GreatVibesHeading>Chefs</GreatVibesHeading>
          <SubTitel>Meet Our Chef</SubTitel>
        </div>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-5  ">
        <ChefsProfile></ChefsProfile>
        <ChefsProfile></ChefsProfile>
        <ChefsProfile></ChefsProfile>
        <ChefsProfile></ChefsProfile>
      </div>
      <div className=" flex justify-center items-center my-10 pt-4 ">
        <button className=" text-white font-extralight primaryborder border px-8 py-2 rounded-full ">
          See More
        </button>
      </div>
    </div>
  );
};

export default Chefs;
