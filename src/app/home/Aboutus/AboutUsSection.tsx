import React from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";
import { FaCheck } from "react-icons/fa";
import Primarybtn from "./../../components/ui/Primarybtn";
import aboutImg1 from "@/assets/image/about_col_1.png";
import aboutImg2 from "@/assets/image/about_col_2.1.png";
import aboutImg3 from "@/assets/image/about_col_2.2.png";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className=" py-10  ">
      <div className=" flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 xl:gap-16 ">
        <div className=" w-full ">
          <div className=" text-white w-full lg:w-10/12 flex flex-col gap-5 ">
            <GreatVibesHeading>About us</GreatVibesHeading>
            <SubTitel className=" text-white w-full xl:w-8/12 ">
              We Create the best foody product
            </SubTitel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className=" flex flex-col gap-3 my-2 justify-center items-start ">
              <p className=" flex justify-start items-center gap-3 ">
                <span>
                  <FaCheck></FaCheck>
                </span>
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
              <p className=" flex justify-start items-center gap-3 ">
                <span>
                  <FaCheck></FaCheck>
                </span>
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </p>
              <p className=" flex justify-start items-center gap-3 ">
                <span>
                  <FaCheck></FaCheck>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div>
              <Primarybtn>Read More</Primarybtn>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" grid grid-cols-4 gap-3 w-full  ">
            <div className="  col-span-4  ">
              <Image className=" w-full " src={aboutImg1} alt=""></Image>
            </div>
            <div className="  col-span-2  ">
              <Image className=" w-full " src={aboutImg2} alt=""></Image>
            </div>
            <div className="  col-span-2  ">
              <Image className=" w-full " src={aboutImg3} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
