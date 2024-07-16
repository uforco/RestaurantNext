"use client";
import React, { useEffect, useState } from "react";
import StateLocation from "./location/StateLocation";
import CityLocation from "./location/CityLocation";
import ZipCode from "./location/ZipCode";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
const BillingAddress = () => {
  const [state, setState]: any = useState([]);
  const [newData, setNewData] = useState({
    SName: "",
    CName: "",
    ZCode: "Zip Code",
  });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/uforco/locationlist/main/data.json"
    )
      .then((res) => res.json())
      .then((res: any) => {
        if (res?.length > 0) {
          setState(res);
        }
      });
  }, []);

  const heandelsub = (e: any) => {
    e.preventDefault();
    console.log(e.target.State.value);
  };

  return (
    <div className=" p-4 ">
      <h2 className=" font-semibold text-2xl ">Shipping Address</h2>
      <form onSubmit={heandelsub} className="w-full" action="">
        {/* name section */}
        <div className=" flex w-full gap-8 my-3 ">
          <div className=" w-full ">
            <label htmlFor="FName">First name</label>
            <input
              className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
              id="FName"
              type="text"
            ></input>
          </div>
          <div className=" w-full ">
            <label htmlFor="LName">Last name</label>
            <input
              className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
              id="LName"
              type="text"
            ></input>
          </div>
        </div>
        {/* Email Phone */}
        <div className=" flex w-full gap-8 my-3 ">
          <div className=" w-full ">
            <label htmlFor="Email">Email address</label>
            <input
              className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
              id="Email"
              type="email"
            ></input>
          </div>
          <div className=" w-full ">
            <label htmlFor="Phone">Phone number</label>
            <input
              className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
              id="Phone"
              type="number"
            ></input>
          </div>
        </div>
        {/* Company State */}
        <div className=" flex w-full gap-8 my-3 ">
          <div className=" w-full ">
            <label htmlFor="Company">Company</label>
            <input
              className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
              id="Company"
              type="text"
            ></input>
          </div>
          <StateLocation
            state={state}
            setNewData={setNewData}
            newData={newData}
          ></StateLocation>
        </div>
        {/* City ZipCode */}
        <div className=" flex w-full gap-8 my-3 ">
          <CityLocation
            state={state}
            setNewData={setNewData}
            newData={newData}
          ></CityLocation>
          <ZipCode
            state={state}
            setNewData={setNewData}
            newData={newData}
          ></ZipCode>
        </div>
        {/* Address1 Address2 */}
        <div className=" flex w-full gap-8 my-3 ">
          <div className=" w-full ">
            <label htmlFor="Address1">Address 1</label>
            <input
              className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
              id="Address1"
              name="Address1"
              type="text"
            ></input>
          </div>
          <div className=" w-full ">
            <label htmlFor="Address2">Address 2</label>
            <input
              className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
              id="Address2"
              name="Address2"
              type="text"
            ></input>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-5 ">
          <button
            className=" flex justify-center items-center w-full border text-gray-700 hover:text-white hover:bg-[#FF9F0D] p-3 "
            type="submit"
          >
            <MdKeyboardArrowLeft className=" text-3xl "></MdKeyboardArrowLeft>
            <span>Back to cart</span>
          </button>
          <button
            className=" flex justify-center items-center w-full border text-gray-700 hover:text-white hover:bg-[#FF9F0D] p-3 "
            type="submit"
          >
            <span>Proceed to shipping</span>
            <MdKeyboardArrowRight className=" text-3xl "></MdKeyboardArrowRight>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
