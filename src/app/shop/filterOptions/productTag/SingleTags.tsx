import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface tagstext {
  children?: ReactNode;
}

const SingleTags: FC<tagstext> = ({ children }) => {
  return (
    <li className=" inline-block  group ">
      <Link href={""}>
        <p className="border-b-[2px] p-[2px] m-2 text-gray-700 font-normal group-hover:text-[#df8704] group-hover:border-[#FF9F0D] ">
          {children}
        </p>
      </Link>
    </li>
  );
};

export default SingleTags;
