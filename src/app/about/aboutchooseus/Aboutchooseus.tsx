import React from "react";
import ParentWeithControl from "./../../components/ParentWeithControl";
import Image from "next/image";
import about from "@/assets/about/unsplash_3iexvMShGfQ.png";
import Student from "@/assets/about/Student.png";
import Coffee from "@/assets/about/Coffee.png";
import Person from "@/assets/about/Person.png";
import Whowhatservice from "./Whowhatservice";

const Aboutchooseus = () => {
  const whodata = [
    {
      icon: "Student.png",
      title: "Best Chef",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat",
    },
    {
      icon: "Coffee.png",
      title: "120 Item food",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat",
    },
    {
      icon: "Person.png",
      title: "Clean Environment",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat",
    },
  ];

  return (
    <ParentWeithControl>
      <div className=" mb-8 ">
        <div className=" flex flex-col justify-center items-center ">
          <h2 className=" text-4xl font-semibold ">Why Choose us</h2>
          <p className=" w-full lg:w-[550px] text-center my-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
        </div>
        <div className=" my-10 mt-1 lg:mt-5 ">
          <Image src={about} alt=""></Image>
        </div>
        <div className=" flex flex-col lg:flex-row gap-5 ">
          {whodata.map((item) => (
            <Whowhatservice key={item?.title} data={item}></Whowhatservice>
          ))}
        </div>
      </div>
    </ParentWeithControl>
  );
};

export default Aboutchooseus;
