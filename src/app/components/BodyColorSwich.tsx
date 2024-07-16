"use client";
import React, { FC, ReactNode } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

interface bodycolor {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });
const BodyColorSwich: FC<bodycolor> = ({ children }) => {
  const pathname = usePathname().slice(1);
  return (
    <body
      className={`${inter.className} ${
        pathname === "menu" ? "bodyBgColorWhite" : "bodyBgColorBlack"
      }  `}
    >
      {children}
    </body>
  );
};

export default BodyColorSwich;
