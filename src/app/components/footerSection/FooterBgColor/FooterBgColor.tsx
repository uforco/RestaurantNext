"use client";

import React, { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface colorTypeBG {
  children: ReactNode;
}

const FooterBgColor: FC<colorTypeBG> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname.length < 2 ? "primaryBgcolor" : "bg-[#4F4F4F]"
      } text-white `}
    >
      {children}
    </div>
  );
};

export default FooterBgColor;
