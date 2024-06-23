import React from "react";
import SubTitel from "./../ui/SubTitel";

const NeedOurSupport = () => {
  return (
    <div className=" md:mx-14 ">
      <div className=" text-white py-10 border-b primaryBorderColor ">
        <div className=" flex flex-col md:flex-row gap-10 justify-center items-center ">
          <div className=" w-full  ">
            <SubTitel className=" text-2xl ">
              Still You Need Our Support ?
            </SubTitel>
            <p className=" pt-3 text-sm ">
              {"Don’t"} wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className=" w-full flex justify-end  ">
            <form
              action=""
              className=" relative flex justify-center w-full md:w-2/3 overflow-hidden rounded "
            >
              <input
                className="primaryBgcolor placeholder:text-white p-3 w-full "
                type="search"
                name=""
                id=""
                placeholder="Enter Your Email"
              ></input>

              <button
                className="primarycolor absolute top-0 right-0 h-full  rounded-l-md  px-5 bg-white "
                type="submit"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedOurSupport;
