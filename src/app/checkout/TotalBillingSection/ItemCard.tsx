import Image from "next/image";
import React from "react";
import Rectangle8933 from "@/assets/chexkout/Rectangle8933.png";
const ItemCard = () => {
  return (
    <div className=" flex gap-5 w-96 border-b py-5 ">
      <Image src={Rectangle8933} alt=""></Image>
      <div>
        <h2>Chicken Tikka Kabab</h2>
        <p>150 gm net</p>
        <p>50 $</p>
      </div>
    </div>
  );
};

export default ItemCard;
