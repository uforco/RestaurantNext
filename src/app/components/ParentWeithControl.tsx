import React, { ReactNode } from "react";

const ParentWeithControl = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <div className=" container mx-auto overflow-hidden  px-4 2xl:px-24">
      {children}
    </div>
  );
};

export default ParentWeithControl;
