import React from "react";
import Image from "next/image";
import something from "@/assets/about/unsplash_v3OlBE6-fhU.png";
const TeamMenberProfile = () => {
  return (
    <div className=" relative w-full shadow-lg ">
      <Image className=" w-full " src={something} alt=""></Image>
      <div className=" absolute bottom-0 left-0 right-0 bg-white text-center py-6 p-3 ">
        <h2 className=" font-semibold  ">Mark Henry</h2>
        <p className=" font-light ">Owner</p>
      </div>
    </div>
  );
};

export default TeamMenberProfile;
