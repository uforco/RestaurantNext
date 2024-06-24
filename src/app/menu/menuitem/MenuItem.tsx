import Image from "next/image";
import React, { FC, ReactNode } from "react";
import startermenu from "@/assets/menu/startermenu.png";

interface MenuData {
  children?: ReactNode;
  data?: any;
  className?: string;
}

const MenuItem: FC<MenuData> = ({ children, data, className: classname }) => {
  return (
    <div
      className={`${classname} flex flex-col md:flex-row gap-2 md:gap-14 py-8 w-full `}
    >
      <div className=" flex justify-center items-center h-40 md:h-auto overflow-hidden ">
        <Image src={startermenu} alt=""></Image>
      </div>
      <div className=" w-full md:w-2/3 ">
        <h1 className=" text-4xl font-bold ">Starter Menu</h1>
        {/* manu 1 */}
        <div className=" group cursor-pointer mt-4 pb-2 border-b flex flex-col gap-1 text-sm text-gray-500 ">
          <div className=" mt-3 flex justify-between text-black text-xl font-medium ">
            <h3 className=" group-hover:text-[#FF9F0D] ">
              Alder Grilled Chinook Salmon
            </h3>
            <p className=" primarycolor gr">32$</p>
          </div>
          <p>Toasted French bread topped with romano, cheddar</p>
          <span>560 CAL</span>
        </div>
        {/* manu 2 */}
        <div className=" group cursor-pointer mt-4 pb-2 border-b flex flex-col gap-1 text-sm text-gray-500 ">
          <div className="mt-3 flex justify-between text-black text-xl font-medium ">
            <h3 className=" group-hover:text-[#FF9F0D] ">
              Alder Grilled Chinook Salmon
            </h3>
            <p className=" primarycolor gr">32$</p>
          </div>
          <p>Toasted French bread topped with romano, cheddar</p>
          <span>560 CAL</span>
        </div>
        {/* manu 3 */}
        <div className=" group cursor-pointer mt-4 pb-2 border-b flex flex-col gap-1 text-sm text-gray-500 ">
          <div className="mt-3 flex justify-between text-black text-xl font-medium ">
            <h3 className=" group-hover:text-[#FF9F0D] ">
              Alder Grilled Chinook Salmon
            </h3>
            <p className=" primarycolor gr">32$</p>
          </div>
          <p>Toasted French bread topped with romano, cheddar</p>
          <span>560 CAL</span>
        </div>
        {/* manu 3 */}
        <div className=" group cursor-pointer mt-4 pb-2 border-b flex flex-col gap-1 text-sm text-gray-500 ">
          <div className="mt-3 flex justify-between text-black text-xl font-medium ">
            <h3 className=" group-hover:text-[#FF9F0D] ">
              Alder Grilled Chinook Salmon
            </h3>
            <p className=" primarycolor gr">32$</p>
          </div>
          <p>Toasted French bread topped with romano, cheddar</p>
          <span>560 CAL</span>
        </div>
        {/* manu 3 */}
        <div className=" group cursor-pointer mt-4 pb-2 border-b flex flex-col gap-1 text-sm text-gray-500 ">
          <div className="mt-3 flex justify-between text-black text-xl font-medium ">
            <h3 className=" group-hover:text-[#FF9F0D] ">
              Alder Grilled Chinook Salmon
            </h3>
            <p className=" primarycolor gr">32$</p>
          </div>
          <p>Toasted French bread topped with romano, cheddar</p>
          <span>560 CAL</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
