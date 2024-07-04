import React from "react";
import ItemImage from "./ItemImage";
import Rating from "./../../../components/ui/Rating";
import { BiShoppingBag } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import ShareIcon from "./ShareIcon";
const HeaderSection = () => {
  return (
    <div className=" flex w-full flex-col lg:flex-row gap-8 ">
      <ItemImage></ItemImage>
      <div className=" w-full ">
        <span className="primaryBgcolor text-white font-light text-xs me-2 px-2.5 py-0.5 rounded ">
          In stock
        </span>
        <div>
          <div className=" border-b pb-5 flex flex-col gap-3 ">
            <h2 className=" text-3xl font-semibold my-2 ">
              Yummy Chicken Chup
            </h2>
            <p className=" text-sm font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </p>
          </div>
          <div className=" border-b py-5 flex flex-col gap-4 ">
            <h2 className=" font-semibold ">54.00$</h2>
            <div className=" flex gap-2 -ml-2 ">
              <div className="flex items-center">
                <Rating className="primarycolor"></Rating>
                <Rating className="primarycolor"></Rating>
                <Rating className="primarycolor"></Rating>
                <Rating className="primarycolor"></Rating>
              </div>
              {" | "}
              <p>5.0 Rating</p>
              {" | "}
              <p>22 Review</p>
            </div>
            <p>Dictum/cursus/Risus</p>
            <div className=" flex gap-4 ">
              <div className=" flex border border-gray-400 ">
                <button className="p-1 px-4 ">-</button>
                <p className=" p-1 px-4 border-x border-gray-400 ">1</p>
                <button className="p-1 px-4 ">+</button>
              </div>
              <button className=" flex justify-center items-center primaryBgcolor px-6 gap-2 font-light text-sm rounded-sm text-white ">
                <BiShoppingBag></BiShoppingBag>
                Add to cart
              </button>
            </div>
          </div>
          <div className=" border-b py-5 flex flex-col gap-3 ">
            <div className=" flex gap-8 ">
              <button className=" flex justify-center items-center gap-2 ">
                <FaRegHeart></FaRegHeart> <span>Add to Wishlist</span>
              </button>
              <p className=" flex justify-start items-center gap-2 ">
                <IoIosGitCompare></IoIosGitCompare> Compaze
              </p>
            </div>
            <div className=" flex flex-col gap-2 ">
              <p>Category: Pizza</p>
              <p>Tag: Our Shop</p>
            </div>
            <ShareIcon></ShareIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
