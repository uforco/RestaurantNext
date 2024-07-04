import React from "react";
import Link from "next/link";
import { FaFacebookF, FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";

const ShareIcon = () => {
  return (
    <div className=" flex gap-3 ">
      Share :
      <ul className=" flex justify-start items-center gap-2 ">
        <li className=" flex justify-center items-center size-7 rounded-full bg-gray-500 text-white p-2 ">
          <Link href={""}>
            <FaFacebookF></FaFacebookF>
          </Link>
        </li>
        <li className=" flex justify-center items-center size-7 rounded-full bg-gray-500 text-white p-2 ">
          <Link href={""}>
            <FaDiscord></FaDiscord>
          </Link>
        </li>
        <li className=" flex justify-center items-center size-7 rounded-full bg-gray-500 text-white p-2 ">
          <Link href={""}>
            <FaTwitter></FaTwitter>
          </Link>
        </li>
        <li className=" flex justify-center items-center size-7 rounded-full bg-gray-500 text-white p-2 ">
          <Link href={""}>
            <FaInstagram></FaInstagram>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShareIcon;
