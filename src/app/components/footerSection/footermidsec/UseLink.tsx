import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Useurl {
  children: ReactNode;
  url: string;
  className?: string;
}

const UseLink: FC<Useurl> = ({ children, url, className: classname }) => {
  return (
    <li>
      <Link className={`${classname} hover:text-[#FF9F0D] `} href={url}>
        {children}
      </Link>
    </li>
  );
};

export default UseLink;
