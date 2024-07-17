"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Reviewcarosol = () => {
  const [sliderRef] = useKeenSlider(
    {
      mode: "free-snap",
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 15,
      },
    },
    [
      (slider) => {
        let timeout: any;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div ref={sliderRef} className="keen-slider w-full">
      <div className="keen-slider__slide py-14 number-slide1">
        <ReviewCard></ReviewCard>
      </div>
      <div className="keen-slider__slide py-14 number-slide2">
        <ReviewCard></ReviewCard>
      </div>
      <div className="keen-slider__slide py-14 number-slide3">
        <ReviewCard></ReviewCard>
      </div>
      <div className="keen-slider__slide py-14 number-slide4">
        <ReviewCard></ReviewCard>
      </div>
      <div className="keen-slider__slide py-14 number-slide5">
        <ReviewCard></ReviewCard>
      </div>
      <div className="keen-slider__slide py-14 number-slide6">
        <ReviewCard></ReviewCard>
      </div>
    </div>
  );
};

export default Reviewcarosol;
