import React from "react";
import AboutHeaderOption from "./aboutheader/AboutHeaderOption";
import Aboutchooseus from "./aboutchooseus/Aboutchooseus";
import TeamMember from "./AboutTeamMember/TeamMember";

const page = () => {
  return (
    <div className=" bg-white ">
      <AboutHeaderOption></AboutHeaderOption>
      <Aboutchooseus></Aboutchooseus>
      <TeamMember></TeamMember>
    </div>
  );
};

export default page;
