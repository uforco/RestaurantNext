import React from "react";
import Image from "next/image";
import headimg from "@/assets/image/headerImage.png";
import Primarybtn from "./../../components/ui/Primarybtn";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa6";
import { Great_Vibes } from "next/font/google";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import SubTitel from "./../../components/ui/SubTitel";

const GreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div>
      <div className=" flex flex-col-reverse md:flex-row justify-center py-5 md:py-0 xl:py-14 items-center gap-10 text-white ">
        {/* header left */}
        <div
          className=" p-10 relative 
        after:content-[''] after:absolute after:left-0 after:top-0 after:w-[2px] after:h-1/5 after:bg-white after:z-10
        before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-[2px] before:h-1/5 before:bg-white before:z-10
        "
        >
          <div className=" absolute -left-2 z-20  top-1/2 -translate-y-1/2 text-xl flex flex-col gap-8   ">
            <span className="  hover:text-[#FF9F0D] cursor-pointer ">
              <FaFacebookF></FaFacebookF>
            </span>
            <span className=" text-[#FF9F0D] hover:text-[#FF9F0D] cursor-pointer ">
              <FaTwitter></FaTwitter>
            </span>
            <span className=" hover:text-[#FF9F0D] cursor-pointer ">
              <FaPinterestP></FaPinterestP>
            </span>
          </div>
          <div className=" flex flex-col gap-3 w-full xl:w-10/12 2xl:w-8/12 sm:gap-6  ">
            <GreatVibesHeading>Its Quick & Amusing!</GreatVibesHeading>
            <SubTitel>The Art of speed food Quality</SubTitel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <div>
              <Primarybtn>See Manu</Primarybtn>
            </div>
          </div>
        </div>
        {/* header right  */}
        <div>
          <div>
            <Image
              src={headimg}
              alt="head-img"
              style={{
                width: "100%",
                height: "auto",
              }}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
