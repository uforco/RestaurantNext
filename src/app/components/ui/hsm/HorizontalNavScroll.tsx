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
    "text-white p-3 h-full absolute text-4xl to-40% font-bold cursor-pointer m-[2px] z-40";

  return (
    <div className="tab-navigation rounded-full relative flex justify-center items-center max-w-fit overflow-hidden px-[2px]  ">
      <span
        id="leftbtn"
        className={`  uil horizoScrollArrowLeft left-btn rounded-l-full  bg-gradient-to-l from-transparent to-[#0D0D0D] -left-1 pr-1 ${iconStyle} `}
      >
        <p
          className={`${leftArrowStyle} flex justify-center items-center h-full w-full  pr-3`}
        >
          {arrowLeft !== undefined ? (
            arrowLeft
          ) : (
            <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft>
          )}
        </p>
      </span>
      <ul
        id="tabmenu"
        className={`${classname}  tab-menu  py-[2px] px-10 whitespace-nowrap m-0 overflow-x-auto select-none scroll-smooth z-20  `}
      >
        {children}
      </ul>
      <span
        id="rightbtn"
        className={`  uil horizoScrollArrowRight right-btn rounded-r-full bg-gradient-to-r from-transparent to-[#0D0D0D] pl-1  -right-1  ${iconStyle}`}
      >
        <p
          className={` ${rightArrowStyle} flex justify-center items-center h-full w-full  pl-3 `}
        >
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
