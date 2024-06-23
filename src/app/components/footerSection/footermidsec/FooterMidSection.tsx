import React from "react";
import TitelHeading from "./TitelHeading";
import FooterAbout from "./FooterAbout";
import Link from "next/link";
import UseLink from "./UseLink";
import RecentPost from "./RecentPost";

const FooterMidSection = () => {
  const uselink = ["about", "news", "partners", "Team", "menu", "contacts"];
  const helpUrl = [
    { name: "FAQ", url: "/faq" },
    { name: "Term & conditions", url: "/terms" },
    { name: "Reporting", url: "/reporting" },
    { name: "Support Policy", url: "/supportpolicy" },
    { name: "Privacy", url: "/privacy" },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-20 w-full py-10 text-white ">
      <FooterAbout></FooterAbout>

      <div className=" w-full  ">
        <TitelHeading className={"text-white"}>Useful Links</TitelHeading>
        <ul className=" flex flex-col gap-3 ">
          {uselink.map((item, inx) => (
            <UseLink
              key={inx}
              url={`/${item}`}
              className=" capitalize font-light "
            >
              {item}
            </UseLink>
          ))}
        </ul>
      </div>

      <div className=" w-full ">
        <TitelHeading className={"text-white"}>Help?</TitelHeading>
        <ul className=" flex flex-col gap-3 ">
          {helpUrl.map((item, inx) => (
            <UseLink
              key={inx}
              url={`${item?.url}`}
              className=" capitalize font-light "
            >
              {item?.name}
            </UseLink>
          ))}
        </ul>
      </div>

      <div className=" w-full  ">
        <TitelHeading className={"text-white"}>Recent Post</TitelHeading>
        <div className="flex flex-col gap-3">
          <RecentPost></RecentPost>
          <RecentPost></RecentPost>
          <RecentPost></RecentPost>
        </div>
      </div>
    </div>
  );
};

export default FooterMidSection;
