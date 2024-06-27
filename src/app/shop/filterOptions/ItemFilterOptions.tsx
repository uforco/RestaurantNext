import React, { FC, ReactNode } from "react";
import SearchShopItem from "./SearchShopItem";
import CategoryItem from "./CategoryItem";
import FilterbyPrice from "./FilterbyPrice";
import LatestProduct from "./latestproduct/LatestProduct";
import Image from "next/image";
import Banner from "@/assets/shop/Banner.png";
import Link from "next/link";
import ProductTags from "./productTag/ProductTags";

interface ItemFilterOptionsProps {
  children?: ReactNode;
  className?: string;
}

const ItemFilterOptions: FC<ItemFilterOptionsProps> = ({
  children,
  className: classname,
}) => {
  return (
    <div
      className={` ${classname}  w-full md:w-[450px]  bg-black bg-opacity-50  flex justify-end h-screen md:h-auto overflow-x-hidden`}
    >
      <div className=" w-11/12 md:w-full pb-1  bg-white pt-8 md:pt-0 px-4  overflow-y-scroll md:overflow-y-hidden overflow-x-hidden ">
        <div className=" relative my-8 block md:hidden ">
          <div className=" absolute -left-3 -top-14 flex justify-start items-start mt-0 ">
            {children}
          </div>
        </div>
        <SearchShopItem></SearchShopItem>
        <CategoryItem></CategoryItem>
        <div className=" flex justify-center items-center py-5 ">
          <Image src={Banner} alt=""></Image>
        </div>
        <FilterbyPrice></FilterbyPrice>
        <LatestProduct></LatestProduct>
        <ProductTags></ProductTags>
      </div>
    </div>
  );
};

export default ItemFilterOptions;
