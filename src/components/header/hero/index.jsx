import * as React from "react";

import StaticImageFS from "./staticImageFS";
import classNames from "classnames";

const bgImage = {
  pointerEvents: "none",
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: -1,
  objectPosition: "center",
};

const Hero = ({ imageName, children }) => {
  return (
    <div className="w-sceen relative grid h-screen place-content-center">
      <StaticImageFS
        filename={imageName}
        alt="Hundefreunde Herzogenrath"
        className="hero-image"
        style={bgImage}
        imgStyle={bgImage}
      />

      <div className="text-center">{children}</div>
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
