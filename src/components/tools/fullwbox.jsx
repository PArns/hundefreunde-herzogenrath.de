import * as React from "react";

const FullWBox = ({ children, ...other }) => {
  return (
    <div
      className="mx-break-out w-screen shadow-[inset_0_10px_10px_0px_rgba(0,0,0,0.4),inset_0_-10px_10px_0px_rgba(0,0,0,0.4)]">
      <div className="container mx-auto">
        <div {...other}>{children}</div>
      </div>
    </div>
  );
};

export default FullWBox;
