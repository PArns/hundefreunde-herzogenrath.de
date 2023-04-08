import * as React from "react";
import PawIcon from "../svgs/paw";

import classNames from "classnames";

const TatzenHeader = ({ children, fill = "#FFCC00", className, ...other }) => {
  const classes = classNames("relative h-full w-full text-center", className);

  return (
    <div className={classes}>
      <h2 className="text-4xl font-semibold lg:text-5xl">{children}</h2>

      <div className="absolute -my-16 mx-20 flex w-full justify-center opacity-30">
        <PawIcon fill={fill} className="block" />
      </div>
    </div>
  );
};

export default TatzenHeader;
