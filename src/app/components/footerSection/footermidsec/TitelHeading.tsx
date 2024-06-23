import React, { FC, ReactNode } from "react";

interface THead {
  children?: ReactNode;
  className?: string;
}

const TitelHeading: FC<THead> = ({ children, className: classname }) => {
  return (
    <h2 className={`${classname} pb-4 text-2xl font-semibold`}>{children}</h2>
  );
};

export default TitelHeading;
