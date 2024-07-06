import React from "react";

const BillInfo = () => {
  return (
    <div className=" w-full overflow-hidden flex flex-col md:flex-row gap-5 justify-center items-center py-10 ">
      <div className=" w-full flex justify-center items-center ">
        <div className=" w-full md:w-10/12   ">
          <h2 className=" text-3xl font-semibold mb-5 ">Coupon Code</h2>
          <div className=" p-4 border rounded ">
            <p className=" mb-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non
            </p>
            <div className=" w-full flex   ">
              <form className=" relative flex justify-center w-full border overflow-hidden rounded ">
                <input
                  className=" placeholder:text-gray-500 p-3 w-full "
                  type="search"
                  name=""
                  id=""
                  placeholder="Enter Here code"
                ></input>

                <button
                  className="primaryBgcolor text-white absolute top-0 right-0 h-full  rounded-l-md  px-5 "
                  type="submit"
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Total Bill */}
      <div className=" w-full flex justify-center items-center  ">
        <div className=" w-full md:w-10/12  bg-orange-300 ">
          <h2>coupon code</h2>
        </div>
      </div>
    </div>
  );
};

export default BillInfo;
