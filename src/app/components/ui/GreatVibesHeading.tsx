import React, { FC, ReactNode } from "react";

import { Great_Vibes } from "next/font/google";

const GreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

interface greatVibesprops {
  children?: ReactNode;
  className?: string;
}

const GreatVibesHeading: FC<greatVibesprops> = ({
  children,
  className: classname,
}) => {
  return (
    <h2
      className={`${GreatVibes.className} ${classname} text-3xl primarycolor`}
    >
      {children}
    </h2>
  );
};

export default GreatVibesHeading;
