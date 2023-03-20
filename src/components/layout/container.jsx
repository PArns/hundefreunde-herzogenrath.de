import * as React from "react";
import classNames from "classnames";

const Container = ({ children, className }) => {
  var headerClass = classNames(
    "max-w-screen-2xl 2xl:mx-auto sm:mr-1",
    className
  );

  return <div className={headerClass}>{children}</div>;
};

export default Container;
