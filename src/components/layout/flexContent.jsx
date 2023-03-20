import * as React from "react";
import classNames from "classnames";

const FlexContainer = ({ children, className }) => {
  var headerClass = classNames(
    "flex flex-wrap lg:flex-nowrap gap-2 md:gap-4 pt-2 pb-1 md:pt-4",
    className
  );

  return <div className={headerClass}>{children}</div>;
};

const FlexContentMain = ({ children, className }) => {
  var headerClass = classNames("w-full", className);

  return (
    <div className={headerClass}>
      <div className="rounded-lg border-2 border-white bg-white p-4 md:border-4">
        {children}
      </div>
    </div>
  );
};

const FlexContainerRight = ({ autoHide, children, className }) => {
  var headerClass = classNames(
    "w-full h-fit flex-wrap",
    {
      "hidden lg:flex": autoHide,
      flex: !autoHide,
    },
    className
  );

  return <div className={headerClass}>{children}</div>;
};

const FlexContentRight = ({ autoHide, width, children, className }) => {
  var headerClass = classNames(
    "rounded-lg bg-white p-2 mb-4 last:mb-0",
    {
      "hidden lg:block": autoHide,
      [`lg:w-[${width}px]`]: width !== undefined,
      "lg:w-[350px]": width === undefined,
    },
    className
  );

  return <div className={headerClass}>{children}</div>;
};

export { FlexContainer, FlexContainerRight, FlexContentMain, FlexContentRight };
