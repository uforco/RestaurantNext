"use client";
import React, { FC, ReactNode, useEffect } from "react";
import "./style.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface hsnmanu {
  children?: ReactNode;
  className?: string;
  arrowLeft?: ReactNode;
  arrowRight?: ReactNode;
  leftArrowStyle?: string | undefined;
  rightArrowStyle?: string | undefined;
}

const HorizontalNavScroll: FC<hsnmanu> = ({
  children,
  className: classname,
  arrowLeft,
  arrowRight,
  leftArrowStyle,
  rightArrowStyle,
}) => {
  useEffect(() => {
    let leftbtn: any = document.getElementById("leftbtn");
    let rightbtn: any = document.getElementById("rightbtn");
    let tabmenu: any = document.getElementById("tabmenu");
    let mouseDrag = false;
    const siteup = 150;

    const dnoneArrow = (): void => {
      let scrollValue = Math.ceil(tabmenu.scrollLeft);
      let widthValue = tabmenu.scrollWidth - tabmenu.clientWidth;

      leftbtn.style.display = scrollValue > 1 ? "block" : "none";
      rightbtn.style.display = scrollValue < widthValue ? "block" : "none";
    };
    dnoneArrow();
    leftbtn?.addEventListener("click", () => {
      tabmenu.scrollLeft -= siteup;
      setTimeout(() => dnoneArrow(), 100);
    });
    rightbtn?.addEventListener("click", () => {
      tabmenu.scrollLeft += siteup;
      setTimeout(() => dnoneArrow(), 100);
    });

    window.onload = () => {
      rightbtn.style.display =
        tabmenu.scrollWidth > tabmenu.clientWidth ||
        tabmenu.scrollWidth >= tabmenu.innerWidth
          ? "block"
          : "none";
      leftbtn.style.display =
        tabmenu.scrollWidth >= tabmenu.innerWidth ? "block" : "none";
    };
    window.onresize = () => {
      let xscroll = Math.round(tabmenu.scrollLeft);
      rightbtn.style.display =
        tabmenu.scrollWidth > tabmenu.clientWidth ||
        tabmenu.scrollWidth >= tabmenu.innerWidth
          ? "block"
          : "none";
      leftbtn.style.display =
        tabmenu.scrollWidth >= tabmenu.innerWidth ? "block" : "none";

      leftbtn.style.display = xscroll > 0 ? "block" : "none";
    };

    tabmenu.addEventListener("mousemove", (drag: any) => {
      if (!mouseDrag) return;
      tabmenu.scrollLeft -= drag.movementX;
      dnoneArrow();
      tabmenu.classList.add("manudrag");
    });
    document.addEventListener("mouseup", () => {
      mouseDrag = false;
      tabmenu.classList.remove("manudrag");
    });
    tabmenu.addEventListener("mousedown", () => {
      mouseDrag = true;
    });
  }, []);

  const iconStyle =
    "text-white p-5 h-full absolute text-xl cursor-pointer m-[2px] z-40";

  return (
    <div className="tab-navigation rounded-full relative flex justify-center items-center max-w-fit overflow-hidden px-[2px] ">
      <span
        id="leftbtn"
        className={` ${leftArrowStyle} uil horizoScrollArrowLeft left-btn rounded-l-full  bg-gradient-to-l from-transparent to-[#ac6d0e] to-75% -left-1  ${iconStyle} `}
      >
        <p className=" flex justify-center items-center h-full w-full -ml-1 ">
          {arrowLeft !== undefined ? (
            arrowLeft
          ) : (
            <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft>
          )}
        </p>
      </span>
      <ul
        id="tabmenu"
        className={`${classname}  tab-menu  py-[2px] px-6 whitespace-nowrap m-0 overflow-x-auto select-none scroll-smooth z-20  `}
      >
        {children}
      </ul>
      <span
        id="rightbtn"
        className={` ${rightArrowStyle} uil horizoScrollArrowRight right-btn rounded-r-full bg-gradient-to-r from-transparent to-[#ac6d0e] to-75%  -right-1  ${iconStyle}`}
      >
        <p className=" flex justify-center items-center h-full w-full -mr-1 ">
          {arrowRight !== undefined ? (
            arrowRight
          ) : (
            <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
          )}
        </p>
      </span>
    </div>
  );
};

export default HorizontalNavScroll;
