import React from "react";
import Header from "./HeaderSection/Header";
import ParentWeithControl from "./../components/ParentWeithControl";
import AboutUsSection from "./Aboutus/AboutUsSection";
import FoodSection from "./FcategorySection/FoodSection";
import WhyChooseus from "./WhyChooseus/WhyChooseus";
import Choosedetails from "../components/choosedetails/Choosedetails";
import Choosepickmenu from "./Choosepickmenu/Choosepickmenu";
import Chefs from "./chefs/Chefs";
import Testimonials from "./testimonials/Testimonials";
import RestaurantActiveProcess from "./RestaurantActiveProcess/RestaurantActiveProcess";

const Homepage = () => {
  return (
    <div>
      <section className=" headerBgimg  ">
        <div className=" bg-[#0D0D0D]  bg-opacity-70 ">
          <ParentWeithControl>
            <Header></Header>
          </ParentWeithControl>
        </div>
      </section>
      <section>
        <ParentWeithControl>
          <AboutUsSection></AboutUsSection>
        </ParentWeithControl>
      </section>
      <section>
        <ParentWeithControl>
          <FoodSection></FoodSection>
        </ParentWeithControl>
      </section>
      <section>
        <ParentWeithControl>
          <WhyChooseus></WhyChooseus>
        </ParentWeithControl>
      </section>
      <section className=" choosegroupbackround my-10 ">
        <div className=" bg-[#0D0D0D]  bg-opacity-90 ">
          <ParentWeithControl>
            <Choosedetails></Choosedetails>
          </ParentWeithControl>
        </div>
      </section>
      <section>
        <ParentWeithControl>
          <Choosepickmenu></Choosepickmenu>
        </ParentWeithControl>
      </section>
      <section>
        <ParentWeithControl>
          <Chefs></Chefs>
        </ParentWeithControl>
      </section>
      <section>
        <ParentWeithControl>
          <Testimonials></Testimonials>
        </ParentWeithControl>
      </section>
      <section className=" restaurantActiveProcessbg ">
        <div className=" bg-black bg-opacity-30 w-full ">
          <ParentWeithControl>
            <RestaurantActiveProcess></RestaurantActiveProcess>
          </ParentWeithControl>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
