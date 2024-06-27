import React from "react";
import ParentWeithControl from "./../../components/ParentWeithControl";
import HeaderSection from "./headerSection/HeaderSection";

const page = () => {
  return (
    <div className=" bg-white py-8 ">
      <ParentWeithControl>
        <HeaderSection></HeaderSection>
      </ParentWeithControl>
    </div>
  );
};

export default page;
