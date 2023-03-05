import * as React from "react";

const FixedBackground = ({ children, image }) => {
  return (
    <div
      className="mx-break-out w-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default FixedBackground;
