"use client";
import React, { FC, ReactNode } from "react";

interface BtnOptionalProp {
  children?: ReactNode;
  className?: string;
}

const Primarybtn: FC<BtnOptionalProp> = ({
  children,
  className: classname,
}) => {
  return (
    <button
      className={` ${classname} primaryBgcolor p-3 px-8 text-sm rounded-full `}
    >
      {children}
    </button>
  );
};

export default Primarybtn;
