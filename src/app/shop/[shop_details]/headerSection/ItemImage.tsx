import Image from "next/image";
import React from "react";
import shopd1 from "@/assets/shop/shopdetails/shopd1.png";
import shopd2 from "@/assets/shop/shopdetails/shopd2.png";
import shopd3 from "@/assets/shop/shopdetails/shopd3.png";
import shopd4 from "@/assets/shop/shopdetails/shopd4.png";
import shopd5 from "@/assets/shop/shopdetails/shopd5.png";

const ItemImage = () => {
  return (
    <div className="lg:w-[880px]">
      <div className=" flex flex-col-reverse md:flex-row w-full  gap-3 ">
        <div className=" flex flex-row gap-2 md:flex-col justify-between items-center   ">
          <Image className=" lg:w-full " src={shopd2} alt=""></Image>
          <Image className=" lg:w-full " src={shopd3} alt=""></Image>
          <Image className=" lg:w-full " src={shopd4} alt=""></Image>
          <Image className=" lg:w-full " src={shopd5} alt=""></Image>
        </div>
        <div className="  flex  justify-center items-center w-full ">
          <Image className="  lg:w-full   " src={shopd1} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default ItemImage;
