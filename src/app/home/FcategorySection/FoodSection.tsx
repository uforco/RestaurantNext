import React from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";
import foodcategory1 from "@/assets/image/foodcategory/category1.png";
import foodcategory2 from "@/assets/image/foodcategory/category2.png";
import foodcategory3 from "@/assets/image/foodcategory/category3.png";
import foodcategory4 from "@/assets/image/foodcategory/category4.png";
import Image from "next/image";

const FoodSection = () => {
  return (
    <div className=" py-10 pb-0 ">
      <div className=" flex flex-col gap-2 text-white justify-center items-center ">
        <GreatVibesHeading>Food Category</GreatVibesHeading>
        <SubTitel>Choose Food Iteam</SubTitel>
      </div>
      <div className=" grid grid-cols-4 gap-2 md:gap-4 xl:gap-8 w-full py-10 ">
        <div className="   col-span-2  md:col-span-1 p-2 flex justify-center items-center w-full ">
          <Image src={foodcategory1} className=" w-full " alt=""></Image>
        </div>
        <div className="   col-span-2  md:col-span-1 p-2 flex justify-center items-center w-full ">
          <Image src={foodcategory2} className=" w-full " alt=""></Image>
        </div>
        <div className="   col-span-2  md:col-span-1 p-2 flex justify-center items-center w-full ">
          <Image src={foodcategory3} className=" w-full " alt=""></Image>
        </div>
        <div className="   col-span-2  md:col-span-1 p-2 flex justify-center items-center w-full ">
          <Image src={foodcategory4} className=" w-full " alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
