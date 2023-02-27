import * as React from "react";

import StaticImageFS from "./staticImageFS";
import ScrollDownIndicator from "./scrolldownindicator";
import classNames from "classnames";

const Hero = ({ imageName, children }) => {
  return (
    <div className="w-sceen relative grid h-max place-content-center lg:h-screen">
      <StaticImageFS
        filename={imageName}
        alt="Hundefreunde Herzogenrath"
        className="pointer-events-none -z-10 h-max w-full object-cover lg:absolute lg:h-screen"
      />

      <div className="text-center">{children}</div>
      <div className="absolute inset-x-0 bottom-10 hidden lg:block">
        <ScrollDownIndicator />
      </div>
    </div>
  );
};

const Title = ({ children, className }) => {
  const classes = classNames("text-5xl font-bold text-white", className);
  return <div className={classes}>{children}</div>;
};

Hero.Title = Title;

const SubTitle = ({ children, className }) => {
  const classes = classNames("text-3xl font-semibold text-white", className);
  return <div className={classes}>{children}</div>;
};

Hero.SubTitle = SubTitle;

export default Hero;
