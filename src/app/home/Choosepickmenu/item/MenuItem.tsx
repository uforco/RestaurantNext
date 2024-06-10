import React from "react";
import Image from "next/image";
import itemimg from "@/assets/image/itemImg.png";

const MenuItem = () => {
  return (
    <div className=" flex gap-3 justify-center items-center text-white ">
      <div>
        <Image className=" rounded-xl " src={itemimg} alt=""></Image>
      </div>
      <div>
        <h2 className=" font-semibold text-xl ">Lettuce Leaf</h2>
        <p className=" text-gray-400 ">
          Lacus nisi, et ac dapibus velit in consequat.
        </p>
        <h3 className=" primarycolor font-semibold text-xl ">12.5 $</h3>
      </div>
    </div>
  );
};

export default MenuItem;
