import Image from "next/image";
import React, { FC, ReactNode } from "react";
import menuheaderimg from "@/assets/menu/menuheaderimg.png";

interface UrlHeaderTitel {
  children: ReactNode;
}

const UrlHeader: FC<UrlHeaderTitel> = ({ children }) => {
  return (
    <div className=" relative overflow-hidden ">
      <Image
        className=" w-full object-cover "
        src={menuheaderimg}
        alt=""
      ></Image>
      {children}
    </div>
  );
};

export default UrlHeader;
