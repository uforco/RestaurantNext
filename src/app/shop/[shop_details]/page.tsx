import React from "react";
import ParentWeithControl from "./../../components/ParentWeithControl";
import HeaderSection from "./headerSection/HeaderSection";
import Info from "./info/Info";
import SimilarProducts from "./similarProducts/SimilarProducts";

const page = () => {
  return (
    <div className=" bg-white py-8 ">
      <ParentWeithControl>
        <HeaderSection></HeaderSection>
        <Info></Info>
        <SimilarProducts></SimilarProducts>
      </ParentWeithControl>
    </div>
  );
};

export default page;
