import React from "react";
import Image from "next/image";
import startermenu from "@/assets/menu/startermenu.png";
import MenuItem from "./menuitem/MenuItem";
import ParentWeithControl from "./../components/ParentWeithControl";
import Choosedetails from "./../components/choosedetails/Choosedetails";

const page = () => {
  return (
    <div className=" text-black ">
      <ParentWeithControl>
        <MenuItem className=" md:flex-row"></MenuItem>
      </ParentWeithControl>
      <ParentWeithControl>
        <MenuItem className=" md:flex-row-reverse"></MenuItem>
      </ParentWeithControl>
      <section className=" choosegroupbackround my-10 ">
        <div className=" bg-[#0D0D0D]  bg-opacity-90 ">
          <ParentWeithControl>
            <Choosedetails></Choosedetails>
          </ParentWeithControl>
        </div>
      </section>
      <ParentWeithControl>
        <MenuItem className=" md:flex-row"></MenuItem>
      </ParentWeithControl>
      <ParentWeithControl>
        <MenuItem className=" md:flex-row-reverse"></MenuItem>
      </ParentWeithControl>
    </div>
  );
};

export default page;
