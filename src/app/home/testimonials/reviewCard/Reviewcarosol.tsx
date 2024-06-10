"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Reviewcarosol = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 15,
    },
  });
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
