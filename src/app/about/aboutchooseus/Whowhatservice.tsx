import Image from "next/image";
import React, { FC } from "react";

interface datatype {
  data: {
    icon: String;
    title: String;
    discription: String;
  };
}
const Whowhatservice: FC<datatype> = ({ data }) => {
  return (
    <div className=" w-full flex justify-center items-center ">
      <div className=" flex flex-col justify-center items-center w-96 ">
        <Image
          className=" mb-3 "
          src={require(`@/assets/about/${data?.icon}`)}
          alt=""
        ></Image>
        <h2 className=" font-semibold text-xl my-3 ">{data?.title}</h2>
        <p className=" text-center ">{data?.discription}</p>
      </div>
    </div>
  );
};

export default Whowhatservice;
