import React from "react";
import TitelHeading from "./TitelHeading";
import Image from "next/image";
import ClockClockwise from "@/assets/Icons/ClockClockwise.png";
const FooterAbout = () => {
  return (
    <div className=" w-full  ">
      <TitelHeading className={"text-white  "}>About Us.</TitelHeading>
      <p>
        orporate clients and leisure travelers has been relying on Groundlink
        for dependab safe, and professional chauffeured car service in major
        cities across World.
      </p>
      <div className=" w-full mt-5 flex gap-5 items-center justify-start ">
        <Image
          className=" primaryBgcolor rounded-lg size-16 p-2 "
          src={ClockClockwise}
          alt=""
        ></Image>
        <div>
          <p className=" pb-1 ">Opening Houres</p>
          <p className=" text-sm font-light ">Mon-Sat ( 8.00 - 6.00 )</p>
          <p className=" text-sm font-light ">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );
};

export default FooterAbout;
