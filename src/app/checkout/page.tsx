import React from "react";
import ParentWeithControl from "./../components/ParentWeithControl";
import BillingAddress from "./BillingAddress/BillingAddress";
import TotalBill from "./TotalBillingSection/TotalBill";

const page = () => {
  return (
    <div className=" bg-white py-10 ">
      <ParentWeithControl>
        <div className="flex flex-col lg:flex-row ">
          <div className=" w-full  ">
            <BillingAddress></BillingAddress>
          </div>
          <div className="">
            <TotalBill></TotalBill>
          </div>
        </div>
      </ParentWeithControl>
    </div>
  );
};

export default page;
