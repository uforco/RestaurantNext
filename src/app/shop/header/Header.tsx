"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className=" absolute w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <h2 className=" text-2xl font-semibold ">Our Shop</h2>
      <p>
        Home{` > `}
        <span className=" primarycolor ">
          {" "}
          {pathName.slice(6) === "" ? "Shop" : "Shop Details"}
        </span>
      </p>
    </div>
  );
};

export default Header;
