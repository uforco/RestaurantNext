import React from "react";
import TeamMenberProfile from "./TeamMenberProfile";

const TeamMember = () => {
  return (
    <div className=" py-24 ">
      <div className=" mb-0 pb-0 ">
        <div className=" relative aboutteammem ">
          <div className=" flex flex-col justify-center items-center w-full   h-96 bg-[#FF9F0D] bg-opacity-75 text-white ">
            <h2 className=" text-4xl font-semibold ">Team Member</h2>
            <p className=" my-2 w-full lg:w-[450px] text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
          </div>
        </div>
      </div>
      <div className=" -mt-24 ">
        <div className=" container mx-auto  px-4 2xl:px-24">
          <div className=" flex justify-center items-center bg-opacity-50 ">
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-10  w-full ">
              <TeamMenberProfile></TeamMenberProfile>
              <TeamMenberProfile></TeamMenberProfile>
              <TeamMenberProfile></TeamMenberProfile>
              <TeamMenberProfile></TeamMenberProfile>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
