"use client";
import React, { useState } from "react";
import Description from "./descriptionContainer/Description";
import Reviews from "./reviewsContainer/Reviews";

const Info = () => {
  const [switchInfo, setSwitchInfo] = useState("description");

  let containe;

  if (switchInfo === "description") {
    containe = <Description></Description>;
  }
  if (switchInfo === "reviews") {
    containe = <Reviews></Reviews>;
  }

  return (
    <div>
      <div className=" flex gap-2 ">
        <button
          onClick={() => setSwitchInfo("description")}
          className={` ${
            switchInfo === "description"
              ? "bg-[#FF9F0D] text-white"
              : "text-black bg-transparent"
          }  px-5 py-2 font-light `}
        >
          Description
        </button>
        <button
          onClick={() => setSwitchInfo("reviews")}
          className={` ${
            switchInfo === "reviews"
              ? "bg-[#FF9F0D] text-white"
              : "text-black bg-transparent"
          }  px-5 py-2 font-light `}
        >
          Reviews
        </button>
      </div>
      <div>{containe}</div>
    </div>
  );
};

export default Info;
