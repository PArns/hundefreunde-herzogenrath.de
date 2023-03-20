import * as React from "react";
import PawIcon from "../svgs/paw";

const TatzenHeader = ({ children, fill, ...other }) => {
  return (
    <div className="relative h-full w-full text-center">
      <div className="absolute -z-10 -my-4 mx-20 flex w-full justify-center opacity-40">
        <PawIcon fill={fill} className="block" />
      </div>

      <h2 className="text-4xl font-semibold lg:text-5xl">{children}</h2>
    </div>
  );
};

export default TatzenHeader;
