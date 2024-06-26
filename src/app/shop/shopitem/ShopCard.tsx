import React from "react";
import Image from "next/image";
import itempic from "@/assets/shop/shopcard.png";
import Link from "next/link";

const ShopCard = () => {
  return (
    <div className=" w-full ">
      <Link href={""}>
        <div className=" w-full flex flex-col justify-center items-center gap-2 ">
          <div className=" w-full ">
            <Image className="w-full " src={itempic} alt=""></Image>
          </div>
          <div className=" w-full ">
            <h2 className=" font-semibold ">Name</h2>
            <p className="primarycolor">$ 28.00</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
