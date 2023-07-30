import * as React from "react";

import StaticImageFS from "./staticImageFS";

import Age from "./../tools/age";
import Obfuscate from "react-obfuscate";

const Team = ({ children }) => {
  return (
    <div className="container mx-auto pb-10 grid grid-cols-1 gap-6 px-2 lg:px-0 xl:grid-cols-2">
      {children}
    </div>
  );
};

const Member = ({ name, imageName, since, title, mail, children }) => {
  return (
    <div
      id={name}
      className="flex w-full flex-col items-stretch rounded-lg border shadow-lg lg:flex-row"
    >
      <div className="mx-auto p-2 text-left">
        <StaticImageFS
          filename={imageName}
          alt={name}
          className="h-max w-full rounded-lg shadow-lg lg:w-max"
        />
      </div>

      <div className="flex h-auto w-full flex-col pb-4 pl-4 pr-4 lg:pt-2">
        <div>
          <h2>{name}</h2>
        </div>

        {title && (
          <div className="pb-2">
            <h3 className="text-lg text-gray-700">{title}</h3>
          </div>
        )}

        {since && (
          <div className="pb-2">
            <h3 className="text-lg text-gray-700">
              Trainer seit <Age birthday={since} /> Jahren
            </h3>
          </div>
        )}

        <div className="pb-4">{children}</div>

        {mail && (
          <div className="mt-auto">
            <h3 className="text-sm text-gray-700">
              E-Mail:{" "}
              <Obfuscate
                className="text-sky-800"
                email={`${mail}@hundefreunde-herzogenrath.de`}
              />
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

Team.Member = Member;

export default Team;
