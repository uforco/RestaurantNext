import React from "react";
import ParentWeithControl from "../../components/ParentWeithControl";
import Reviewcarosol from "./../../components/testimonials/reviewCard/Reviewcarosol";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";

const Atestimonials = () => {
  return (
    <ParentWeithControl>
      <div>
        <div className=" py-3 text-white ">
          <GreatVibesHeading>Testimonials</GreatVibesHeading>
          <h1 className={` text-4xl font-bold leading-snug text-gray-900 `}>
            What our client are saying
          </h1>
        </div>
        <div className=" flex justify-center items-center  py-10 mx-0 sm:mx-8 md:mx-14 lg:mx-24 ">
          <Reviewcarosol></Reviewcarosol>
        </div>
      </div>
    </ParentWeithControl>
  );
};

export default Atestimonials;
