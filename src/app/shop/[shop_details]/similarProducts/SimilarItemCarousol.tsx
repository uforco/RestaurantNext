"use client";
import * as React from "react";
// import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ShopCard from "./../../../components/ui/ShopingItemCard/ShopCard";
const SimilarItemCarousol = () => {
  const [orerItemCount, setOrerItemCount] = React.useState(4);

  React.useEffect(() => {
    orerItem(innerWidth);

    window.onresize = () => {
      orerItem(innerWidth);
    };
  }, []);

  const orerItem = (vel: any) => {
    if (640 > vel) setOrerItemCount(1);
    else if (768 > vel) setOrerItemCount(2);
    else if (1024 > vel) setOrerItemCount(3);
    else if (1280 > vel) setOrerItemCount(4);
    else setOrerItemCount(5);
  };

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: orerItemCount,
      spacing: 15,
    },
  });
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide  flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide  flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide  flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide  flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide  flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
      <div className="keen-slider__slide flex justify-center items-center ">
        <ShopCard></ShopCard>
      </div>
    </div>
  );
};

export default SimilarItemCarousol;
