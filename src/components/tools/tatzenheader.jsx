import * as React from "react";
import PawIcon from "../svgs/paw";

import classNames from "classnames";

const TatzenHeader = ({ children, fill = "#FFCC00", className, ...other }) => {
  const classes = classNames("text-center", className);

  return (
    <div className={classes}>
      <h2 className="text-4xl font-semibold lg:text-5xl">{children}</h2>

      <div className="relative w-full">
        <div className="absolute -left-20 -top-16 w-full opacity-30">
          <PawIcon fill={fill} className="mx-auto block h-12 w-12" />
        </div>
      </div>
    </div>
  );
};

export default TatzenHeader;
