import * as React from "react";
import { Link } from "gatsby";

import StaticImageFS from "./staticImageFS";

const KursInfo = ({ children }) => {
  return <div className="container mx-auto px-2 lg:px-0">{children}</div>;
};

const Kurs = ({ name, imageName, timeText, trainer, children }) => {
  return (
    <div
      id={name}
      className="mb-8 flex h-full w-full flex-col items-stretch rounded-lg border shadow-lg lg:flex-row"
    >
      <div className="mx-auto h-max w-full p-2 text-center lg:order-last lg:text-right">
        <StaticImageFS
          filename={imageName}
          alt={name}
          className="h-max w-full rounded-lg shadow-lg lg:w-max"
        />
      </div>

      <div className="h-auto pb-4 pl-4 pr-4 lg:pt-2 flex flex-col">
        <div className="pb-2">
          <h2>{name}</h2>
        </div>

        <div className="pb-4">{children}</div>

        <div className="mt-auto">
          <div className="font-semibold text-gray-600">
            Kursleiter:&nbsp;
            {trainer.map((t) => (
              <Link className="text-sky-800" to={`/team/#${t}`}>
                {t}&nbsp;
              </Link>
            ))}
          </div>

          <div className="font-semibold text-gray-600">{timeText}</div>
        </div>
      </div>
    </div>
  );
};

KursInfo.Kurs = Kurs;

export default KursInfo;
