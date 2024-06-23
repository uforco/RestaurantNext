import React from "react";
import Link from "next/link";
import SingleSocialIcon from "./SingleSocialIcon";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const FooterSocialIcon = () => {
  return (
    <ul className=" flex justify-center items-center gap-4 ">
      <SingleSocialIcon>
        <FaFacebookF></FaFacebookF>
      </SingleSocialIcon>
      <SingleSocialIcon>
        <FaTwitter></FaTwitter>
      </SingleSocialIcon>
      <SingleSocialIcon>
        <FaInstagram></FaInstagram>
      </SingleSocialIcon>
      <SingleSocialIcon>
        <FaYoutube></FaYoutube>
      </SingleSocialIcon>
      <SingleSocialIcon>
        <FaPinterest></FaPinterest>
      </SingleSocialIcon>
    </ul>
  );
};

export default FooterSocialIcon;
