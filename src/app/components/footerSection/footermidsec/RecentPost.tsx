import React from "react";
import Image from "next/image";
import recentpostimg from "@/assets/image/recentpostimg.png";

const RecentPost = () => {
  return (
    <div className=" flex justify-start items-center gap-3 ">
      <div className=" w-16 overflow-hidden rounded-lg ">
        <Image className=" w-full" src={recentpostimg} alt=""></Image>
      </div>
      <div>
        <p className=" font-extralight pb-1 ">20 Feb 2024 </p>
        <p>Keep Your Business </p>
      </div>
    </div>
  );
};

export default RecentPost;
