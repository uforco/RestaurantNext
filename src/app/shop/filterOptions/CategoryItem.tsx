import React from "react";
import { FaCheck } from "react-icons/fa";
const CategoryItem = () => {
  return (
    <div>
      <h2 className=" font-semibold my-4 mb-2 text-xl ">Category</h2>
      <div className=" flex flex-col gap-2 ">
        <div className=" flex justify-start items-center gap-2 ">
          <input className=" categorycheckbox " type="checkbox" name="" id="" />
          <span>Drink</span>
        </div>
        <div className=" flex justify-start items-center gap-2 ">
          <input className=" categorycheckbox " type="checkbox" name="" id="" />
          <span>Thi</span>
        </div>
        <div className=" flex justify-start items-center gap-2 ">
          <input className=" categorycheckbox " type="checkbox" name="" id="" />
          <span>Non Veg</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
