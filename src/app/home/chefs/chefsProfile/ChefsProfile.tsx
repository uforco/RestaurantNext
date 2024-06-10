import React from "react";
import Image from "next/image";
import chefsp1 from "@/assets/image/Chefs/chefsprofile1.png";

const ChefsProfile = () => {
  return (
    <div className=" flex justify-center items-center w-full ">
      <div className=" relative w-72 flex justify-center items-center overflow-hidden rounded-lg ">
        <div>
          <Image src={chefsp1} alt=""></Image>
        </div>
        <div className=" absolute left-0 bottom-0 rounded bg-white px-6 py-1 ">
          <h2 className=" font-semibold ">D.Estwood</h2>
          <p className=" text-sm   ">Chief Chef</p>
        </div>
      </div>
    </div>
  );
};

export default ChefsProfile;
