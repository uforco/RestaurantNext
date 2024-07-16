import React from "react";
import ParentWeithControl from "./../../components/ParentWeithControl";
import Image from "next/image";
import abouta1 from "@/assets/about/unsplash_lP5MCM6nZ5A.png";
import abouta2 from "@/assets/about/unsplash_CLMpC9UhyTo.png";
import abouta3 from "@/assets/about/unsplash_ZuIDLSz3XLg.png";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import Primarybtn from "./../../components/ui/Primarybtn";

const AboutHeaderOption = () => {
  return (
    <ParentWeithControl>
      <div className=" flex flex-col lg:flex-row gap-0 lg:gap-24 py-10 lg:py-20 ">
        <div className=" w-full gap-5 grid grid-cols-4  grid-rows-7  ">
          <div className=" col-span-2 row-span-5 ">
            <Image className=" w-full rounded-md " src={abouta1} alt=""></Image>
          </div>
          <div className=" col-span-2 rounded-md row-span-3 mt-12  ">
            <Image className=" w-full " src={abouta2} alt=""></Image>
          </div>
          <div className=" col-span-2 row-span-4 rounded-md ">
            <Image className=" w-full " src={abouta3} alt=""></Image>
          </div>
        </div>
        <div className=" w-full flex flex-col justify-center items-start">
          <GreatVibesHeading>
            <div className=" flex items-end gap-5 ">
              <h2 className=" font-medium text-4xl ">About us</h2>
              <div className=" flex-grow  ">
                <div className="h-[2px] w-14 primaryBgcolor  -mt-3"></div>
              </div>
            </div>
          </GreatVibesHeading>
          <div className=" w-[430px] ">
            <h2 className=" text-4xl font-semibold mt-3 mb-8 ">
              Food is an important part Of a balanced Diet
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className=" my-8 ">
              <Primarybtn className=" rounded-md text-white ">
                Show more
              </Primarybtn>
            </div>
          </div>
        </div>
      </div>
    </ParentWeithControl>
  );
};

export default AboutHeaderOption;
