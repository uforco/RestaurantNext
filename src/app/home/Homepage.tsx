import React from "react";
import Header from "./HeaderSection/Header";
import ParentWeithControl from "./../components/ParentWeithControl";
import AboutUsSection from "./Aboutus/AboutUsSection";
import FoodSection from "./FcategorySection/FoodSection";
import WhyChooseus from "./WhyChooseus/WhyChooseus";
import Choosedetails from "./choosedetails/Choosedetails";
import Choosepickmenu from "./Choosepickmenu/Choosepickmenu";

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
    </div>
  );
};

export default Homepage;
