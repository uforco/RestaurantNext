import React from "react";

const BillInfo = () => {
  return (
    <div className=" w-full overflow-hidden flex flex-col md:flex-row gap-5 justify-center items-start py-10 ">
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
      <div className=" w-full flex justify-center items-center ">
        <div className=" w-full md:w-10/12   ">
          <h2 className=" text-3xl font-semibold mb-5 ">Total Bill</h2>
          <div className="  border rounded ">
            <div className=" border-b p-4 ">
              <div className=" flex justify-between font-bold text-xl mb-3 ">
                <h2>Cart Subtotal</h2>
                <p>$120.00</p>
              </div>
              <div className=" flex justify-between ">
                <h2>Shipping Charge</h2>
                <p>$00.00</p>
              </div>
            </div>
            <div className=" flex justify-between p-4 font-bold text-xl ">
              <h2>Total Amount</h2>
              <p>$205.00</p>
            </div>
          </div>
          <div>
            <button className=" p-2 py-3 text-center w-full primaryBgcolor text-white my-5 rounded ">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillInfo;
