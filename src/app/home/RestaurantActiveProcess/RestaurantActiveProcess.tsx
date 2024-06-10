import React from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";
import { IoPlayOutline } from "react-icons/io5";
const RestaurantActiveProcess = () => {
  return (
    <div className=" flex justify-end items-center text-right text-white ">
      <div className=" flex flex-col gap-3 w-full lg:w-3/5 xl:w-1/2 py-14 ">
        <div className=" py-3  text-white ">
          <GreatVibesHeading>Restaurant Active Process</GreatVibesHeading>
          <SubTitel>
            We Document Every Food Bean Process untile it is saved
          </SubTitel>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna,
          </p>
          <div className=" mt-8 flex justify-end items-center gap-8 ">
            <button className=" text-white font-extralight primaryborder border px-8 py-2 rounded-full ">
              See More
            </button>
            <button className=" flex justify-center items-center gap-2 ">
              <span className=" primaryBgcolor p-3 rounded-full text-lg  ">
                <IoPlayOutline></IoPlayOutline>
              </span>
              Play Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantActiveProcess;
