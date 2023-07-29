import * as React from "react";
import { Link } from "gatsby";

import StaticImageFS from "./staticImageFS";

const KursBox = ({ name, imageName, timeText, children }) => {
  return (
    <Link to={`/kurse/#${name}`} className="flex h-full w-full flex-col items-stretch rounded-lg border shadow-lg">
      <StaticImageFS
        filename={imageName}
        alt={name}
        className="w-full rounded-t-lg"
      />
      <div className="py-2 text-center">
        <h2>{name}</h2>
      </div>
      <div className="px-4 pb-3">{children}</div>
      <div className="mt-auto px-4 pb-2 font-semibold text-gray-600">
        {timeText}
      </div>
    </Link>
  );
};

export default KursBox;
