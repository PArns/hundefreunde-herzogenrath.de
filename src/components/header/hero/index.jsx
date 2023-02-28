import * as React from "react";

import StaticImageFS from "./staticImageFS";
import ScrollDownIndicator from "./scrolldownindicator";
import classNames from "classnames";
import MenuBar from "./menu";

const Hero = ({ imageName, children }) => {
  return (
    <div className="relative grid place-content-center">
      <StaticImageFS
        filename={imageName}
        alt="Hundefreunde Herzogenrath"
        className="pointer-events-none -z-10 w-screen object-cover lg:h-screen"
      />

      <div className="absolute grid h-full w-full place-content-center text-center">
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-20 hidden lg:block">
        <ScrollDownIndicator />
      </div>
    </div>
  );
};

const Title = ({ children, className }) => {
  const classes = classNames(
    "text-3xl font-bold text-white xl:text-8xl md:text-5xl mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
    className
  );
  return <div className={classes}>{children}</div>;
};

Hero.Title = Title;

const SubTitle = ({ children, className }) => {
  const classes = classNames(
    "text-2xl font-semibold text-white xl:text-6xl md:text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
    className
  );
  return <div className={classes}>{children}</div>;
};

Hero.SubTitle = SubTitle;

const Menu = ({ items, className, location, anchor = "main" }) => {
  const classes = classNames("w-full absolute bottom-0 left-0", className);
  return (
    <div className={classes}>
      <MenuBar items={items} location={location} anchor={anchor} />
    </div>
  );
};

Hero.Menu = Menu;

export default Hero;
