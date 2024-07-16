import React from "react";
import ParentWeithControl from "./../components/ParentWeithControl";
import BillingAddress from "./BillingAddress/BillingAddress";
import TotalBill from "./TotalBillingSection/TotalBill";

const page = () => {
  return (
    <div className=" bg-white py-10 ">
      <ParentWeithControl>
        <div className="flex ">
          <div className=" w-full  ">
            <BillingAddress></BillingAddress>
          </div>
          <div className=" w-96 bg-slate-400 ">
            <TotalBill></TotalBill>
          </div>
        </div>
      </ParentWeithControl>
    </div>
  );
};

export default page;
