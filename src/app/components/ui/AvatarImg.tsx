import React, { FC } from "react";
import Image from "next/image";
import avab from "@/assets/image/tastimonials.png";

interface avatarimg {
  className?: string;
}

const AvatarImg: FC<avatarimg> = ({ className: classname }) => {
  return (
    <div className={` ${classname} rounded-full overflow-hidden `}>
      <Image className=" w-full " src={avab} alt=""></Image>
    </div>
  );
};

export default AvatarImg;
