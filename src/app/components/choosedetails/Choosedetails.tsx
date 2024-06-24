import React from "react";
import choosegroup1 from "@/assets/image/whychooseus/Group1.png";
import choosegroup2 from "@/assets/image/whychooseus/Group2.png";
import choosegroup3 from "@/assets/image/whychooseus/Group3.png";
import choosegroup4 from "@/assets/image/whychooseus/Group4.png";
import Image from "next/image";

const Choosedetails = () => {
  return (
    <div className=" py-16 text-white ">
      <div className=" grid grid-cols-2 gap-y-8 md:gap-y-14 lg:gap-y-4 gap-4 lg:grid-cols-4 w-full ">
        <div className=" flex flex-col justify-center items-center gap-4 ">
          <Image src={choosegroup1} alt=""></Image>
          <p>Professional Chefs</p>
          <h3 className=" text-3xl font-semibold ">420</h3>
        </div>
        <div className=" flex flex-col justify-center items-center gap-4 ">
          <Image src={choosegroup2} alt=""></Image>
          <p>Items Of Food</p>
          <h3 className=" text-3xl font-semibold ">320</h3>
        </div>
        <div className=" flex flex-col justify-center items-center gap-4 ">
          <Image src={choosegroup3} alt=""></Image>
          <p>Years Of Experienced</p>
          <h3 className=" text-3xl font-semibold ">30+</h3>
        </div>
        <div className=" flex flex-col justify-center items-center gap-4 ">
          <Image src={choosegroup4} alt=""></Image>
          <p>Happy Customers</p>
          <h3 className=" text-3xl font-semibold ">220</h3>
        </div>
      </div>
    </div>
  );
};

export default Choosedetails;
