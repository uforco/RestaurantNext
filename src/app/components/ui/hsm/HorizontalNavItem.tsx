import React, { FC, ReactNode } from "react";

interface manuNavItem {
  children?: ReactNode;
  className?: string;
}

const HorizontalNavItem: FC<manuNavItem> = ({
  children,
  className: classname,
}) => {
  return (
    <li
      className={` tab-btn text-white inline-block  my-0 mx-[10px] text-base py-[6px] px-[20px] rounded-[30px] capitalize cursor-pointer select-none ${classname} `}
    >
      {children}
    </li>
  );
};

export default HorizontalNavItem;
