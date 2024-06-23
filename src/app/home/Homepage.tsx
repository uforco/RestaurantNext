import React from "react";
import Header from "./HeaderSection/Header";
import ParentWeithControl from "./../components/ParentWeithControl";
import AboutUsSection from "./Aboutus/AboutUsSection";
import FoodSection from "./FcategorySection/FoodSection";
import WhyChooseus from "./WhyChooseus/WhyChooseus";
import Choosedetails from "./choosedetails/Choosedetails";
import Choosepickmenu from "./Choosepickmenu/Choosepickmenu";
import Chefs from "./chefs/Chefs";
import Testimonials from "./testimonials/Testimonials";
import RestaurantActiveProcess from "./RestaurantActiveProcess/RestaurantActiveProcess";
import FooterSection from "../components/footerSection/FooterSection";
import FooterSocialIcon from "./../components/footerSection/FooterSocialIcon";

// bg-[#0D0D0D]

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
      <section>
        <div className=" bg-black bg-opacity-50 w-full ">
          <ParentWeithControl>
            <FooterSection></FooterSection>
          </ParentWeithControl>
        </div>
        <div className=" text-white primaryBgcolor  ">
          <ParentWeithControl>
            <div className=" flex flex-col md:flex-row gap-5 justify-center md:justify-between items-center py-5  ">
              <p className=" text-center ">
                Copyright © 2022 by Ayeman. All Rights Reserved.
              </p>
              <FooterSocialIcon></FooterSocialIcon>
            </div>
          </ParentWeithControl>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
