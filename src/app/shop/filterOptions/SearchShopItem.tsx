import React from "react";
import { IoIosSearch } from "react-icons/io";
const SearchShopItem = () => {
  return (
    <div className=" w-full flex  ">
      <form
        action=""
        className=" relative flex justify-center w-full overflow-hidden rounded-sm  "
      >
        <input
          className=" bg-[#ffe7c6]  placeholder:text-gray-600 placeholder:text-sm p-2 px-3 w-full "
          type="search"
          name=""
          id=""
          placeholder="Search Product"
        ></input>

        <button
          className="primaryBgcolor text-xl p-1 px-3 absolute top-0 right-0 h-full text-white "
          type="submit"
        >
          <IoIosSearch></IoIosSearch>
        </button>
      </form>
    </div>
  );
};

export default SearchShopItem;
