import React from "react";
import Image from "next/image";
import productimg from "@/assets/shoppingcard/product_img.png";
import { IoClose } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";

const ProductDetails = () => {
  return (
    <tr className=" text-center ">
      <td className=" text-left pt-2 ">
        <div className=" flex gap-2 ">
          <Image className=" size-16 " src={productimg} alt=""></Image>
          <div className=" ">
            <h2>jvfdtjdrtfkgjd</h2>
            <div className=" flex primarycolor ">
              <TiStarFullOutline></TiStarFullOutline>
              <TiStarFullOutline></TiStarFullOutline>
              <TiStarFullOutline></TiStarFullOutline>
              <TiStarFullOutline className=" text-gray-300 "></TiStarFullOutline>
              <TiStarFullOutline className=" text-gray-300 "></TiStarFullOutline>
            </div>
          </div>
        </div>
      </td>
      <td>$35.00</td>
      <td>2</td>
      <td>$70.00</td>
      <td>
        <div className=" w-full flex justify-center items-center  ">
          <button className=" hover:text-[#FF9F0D] ">
            <IoClose></IoClose>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
