import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Ficon {
  children: ReactNode;
}

const SocialProfile: FC<Ficon> = ({ children }) => {
  return (
    <li className=" m-2 ">
      <Link
        className=" text-gray-700 text-xl flex justify-center items-center p-2 bg-white hover:text-[#FF9F0D] rounded overflow-hidden "
        href={""}
      >
        {children}
      </Link>
    </li>
  );
};

export default SocialProfile;
