import React from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";
import Reviewcarosol from "./reviewCard/Reviewcarosol";

const Testimonials = () => {
  return (
    <div>
      <div className=" py-3 text-white ">
        <GreatVibesHeading>Testimonials</GreatVibesHeading>
        <SubTitel>What our client are saying</SubTitel>
      </div>
      <div className=" flex justify-center items-center  py-10 mx-0 sm:mx-8 md:mx-14 lg:mx-24 ">
        <Reviewcarosol></Reviewcarosol>
      </div>
    </div>
  );
};
export default Testimonials;
