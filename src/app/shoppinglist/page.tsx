import React from "react";
import ParentWeithControl from "./../components/ParentWeithControl";
import Productlist from "./productlist/Productlist";
import BillInfo from "./BillDetails/BillInfo";

const page = () => {
  return (
    <div className=" bg-white ">
      <ParentWeithControl>
        <Productlist></Productlist>
        <BillInfo></BillInfo>
      </ParentWeithControl>
    </div>
  );
};

export default page;
