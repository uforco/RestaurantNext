import React, { FC, ReactNode } from "react";
import GreatVibesHeading from "./../../components/ui/GreatVibesHeading";
import whychooseus1 from "@/assets/image/whychooseus/whychooseus1.png";
import whychooseus2 from "@/assets/image/whychooseus/whychooseus2.png";
import whychooseus3 from "@/assets/image/whychooseus/whychooseus3.png";
import whychooseus4 from "@/assets/image/whychooseus/whychooseus4.png";
import whychooseus5 from "@/assets/image/whychooseus/whychooseus5.png";
import whychooseus6 from "@/assets/image/whychooseus/whychooseus6.png";

import Image from "next/image";
import choss1 from "@/assets/Icons/chooseus1.png";
import choss2 from "@/assets/Icons/chooseus2.png";
import choss3 from "@/assets/Icons/chooseus3.png";
import SubTitel from "./../../components/ui/SubTitel";

interface choosegrifprops {
  children: ReactNode;
  className: string;
}

const Choosegrifimg: FC<choosegrifprops> = ({
  children,
  className: classname,
}) => {
  return (
    <div className={`${classname}`}>
      <div className=" flex justify-center items-end w-full h-full  ">
        {children}
      </div>
    </div>
  );
};

const WhyChooseus = () => {
  return (
    <div className=" text-white px-2 ">
      <div className=" flex flex-col-reverse py-8 md:flex-row gap-8 justify-between items-center ">
        <div className=" w-full ">
          <div className=" grid grid-cols-12 gap-3   w-full row-span-12 overflow-hidden ">
            <Choosegrifimg className="  col-span-7 row-span-6 ">
              <Image
                className=" w-full rounded-md "
                src={whychooseus1}
                alt=""
              ></Image>
            </Choosegrifimg>

            <Choosegrifimg className="  col-span-5 row-span-6 ">
              <Image
                className=" w-full rounded-md "
                src={whychooseus2}
                alt=""
              ></Image>
            </Choosegrifimg>

            <Choosegrifimg className="  col-span-5 row-span-3 ">
              <div className="  h-full w-full ">
                <Image
                  className=" w-full rounded-md "
                  src={whychooseus3}
                  alt=""
                ></Image>
              </div>
            </Choosegrifimg>

            <Choosegrifimg className="  col-span-4 row-span-2 ">
              <div className=" w-full h-full ">
                <Image
                  className=" w-full rounded-md "
                  src={whychooseus4}
                  alt=""
                ></Image>
              </div>
            </Choosegrifimg>

            <Choosegrifimg className="  col-span-3 row-span-1 ">
              <div className=" w-full h-full ">
                <Image
                  className=" w-full rounded-md "
                  src={whychooseus5}
                  alt=""
                ></Image>
              </div>
            </Choosegrifimg>

            <Choosegrifimg className="  col-span-3 row-span-1 ">
              <div className=" w-full h-full ">
                <Image
                  className=" w-full rounded-md "
                  src={whychooseus6}
                  alt=""
                ></Image>
              </div>
            </Choosegrifimg>
          </div>
        </div>

        <div className=" w-full  ">
          <div className=" flex flex-col justify-start items-start gap-5 ">
            <GreatVibesHeading>Why Choose us</GreatVibesHeading>
            <SubTitel className=" w-full lg:w-4/5 xl:w-3/5 ">
              Exta ordinary taste And Experienced
            </SubTitel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div>
              <div className=" flex justify-start items-center gap-5 ">
                <div className=" flex flex-col gap-2 justify-center items-center ">
                  <div className=" flex justify-center rounded-md items-center primaryBgcolor p-4 ">
                    <Image className=" w-16 " src={choss1} alt=""></Image>
                  </div>
                  <h2>Fash Food</h2>
                </div>
                <div className=" flex flex-col gap-2 justify-center items-center ">
                  <div className=" flex justify-center rounded-md items-center primaryBgcolor p-4 ">
                    <Image className=" w-16 " src={choss2} alt=""></Image>
                  </div>
                  <h2>Fash Food</h2>
                </div>
                <div className=" flex flex-col gap-2 justify-center items-center ">
                  <div className=" flex justify-center rounded-md items-center primaryBgcolor p-4 ">
                    <Image className=" w-16 " src={choss3} alt=""></Image>
                  </div>
                  <h2>Fash Food</h2>
                </div>
              </div>
            </div>
            <div>
              <div className=" relative flex justify-center items-center gap-8 px-16 py-3 overflow-hidden rounded-lg bg-white text-black after:absolute after:left-0 after:top-0 after:w-[6px] after:h-full after:bg-[#FF9F0D] after:content-['']  ">
                <h2 className=" text-4xl font-semibold primarycolor ">
                  30<span className=" text-3xl ">+</span>
                </h2>
                <div>
                  <p>Years of</p>
                  <h1 className=" font-semibold ">Experienced</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseus;
