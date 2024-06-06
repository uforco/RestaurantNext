import React, { FC, ReactNode } from "react";

interface SubTitelpros {
  children?: ReactNode;
  className?: string;
}

const SubTitel: FC<SubTitelpros> = ({ children, className: classname }) => {
  return (
    <h1 className={` ${classname} text-4xl font-bold leading-snug `}>
      <span className=" primarycolor ">{children?.toString().slice(0, 2)}</span>
      {children?.toString().slice(2)}
    </h1>
  );
};

export default SubTitel;
