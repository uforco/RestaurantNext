"use client";
import React from "react";

const Header = () => {
  return (
    <div className=" absolute w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <h2 className=" text-2xl font-semibold ">Shopping Cart</h2>
      <p>
        Home{` > `}
        <span className=" primarycolor "> Shopping Cart</span>
      </p>
    </div>
  );
};

export default Header;
