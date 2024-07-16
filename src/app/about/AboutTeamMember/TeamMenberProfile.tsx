import React from "react";
import Image from "next/image";
import something from "@/assets/about/unsplash_v3OlBE6-fhU.png";
import SocialProfile from "./SocialProfile";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const TeamMenberProfile = () => {
  return (
    <div className=" relative w-full shadow-lg group overflow-hidden  ">
      <Image className=" w-full " src={something} alt=""></Image>
      <div className=" absolute bottom-0 left-0 right-0 bg-white text-center py-6 p-3 ">
        <h2 className=" font-semibold  ">Mark Henry</h2>
        <p className=" font-light ">Owner</p>
      </div>

      <div className=" absolute -top-99 right-1 group-hover:top-1 duration-1000 transition-all ">
        <ul className=" list-none ">
          <SocialProfile>
            <FaFacebookF></FaFacebookF>
          </SocialProfile>
          <SocialProfile>
            <FaTwitter></FaTwitter>
          </SocialProfile>
          <SocialProfile>
            <FaYoutube></FaYoutube>
          </SocialProfile>
          <SocialProfile>
            <FaPinterest></FaPinterest>
          </SocialProfile>
        </ul>
      </div>
    </div>
  );
};

export default TeamMenberProfile;
