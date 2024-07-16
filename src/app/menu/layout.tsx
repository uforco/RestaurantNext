import React from "react";
import Image from "next/image";
import menuheaderimg from "@/assets/menu/menuheaderimg.png";
import UrlHeader from "./../components/urlheader/UrlHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UrlHeader>
        <div className=" absolute w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <h2 className=" text-2xl font-semibold ">Our Menu</h2>
          <p>
            Home{` > `}
            <span className=" primarycolor ">Menu</span>
          </p>
        </div>
      </UrlHeader>
      <>{children}</>
    </div>
  );
}
