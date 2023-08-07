import * as React from "react";

import StaticImageFS from "./staticImageFS";

import Age from "./../tools/age";
import Obfuscate from "react-obfuscate";

const Team = ({ children }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 px-2 pb-10 lg:px-0 xl:grid-cols-2">
      {children}
    </div>
  );
};

const Member = ({
  name,
  imageName,
  since,
  title,
  kurs,
  mail,
  sex,
  dog,
  children,
}) => {
  return (
    <div
      id={name}
      className="flex w-full flex-col items-stretch rounded-lg border shadow-lg lg:flex-row"
    >
      <div className="mx-auto text-center">
        <StaticImageFS
          filename={imageName}
          alt={name}
          className="m-5 h-64 w-64 rounded-full shadow-xl"
        />
      </div>

      <div className="flex h-auto w-full flex-col pb-4 pr-4 lg:pt-2">
        <div>
          <h2 className="text-3xl">{name}</h2>
        </div>

        {title && (
          <div className="pb-2">
            <h3 className="text-base text-gray-700">{title}</h3>
          </div>
        )}

        {since && (
          <div>
            <h3 className="text-base text-gray-700">
              Trainer{sex == "w" ? "in" : ""} seit{" "}
              <Age birthday={since} single=" Jahr" plural=" Jahren" />
            </h3>
          </div>
        )}

        {kurs && (
          <div className="pb-2">
            <h3 className="text-base text-gray-700">Kurs: {kurs}</h3>
          </div>
        )}

        <div className="pb-2">{children}</div>

        <div className="mt-auto">
          {dog && (
            <h3 className="mb-1 text-sm text-gray-700">Eigene Hunde: {dog}</h3>
          )}

          {mail && (
            <h3 className="text-sm text-gray-700">
              E-Mail: <Obfuscate className="text-sky-800" email={mail} />
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

Team.Member = Member;

const Dog = ({ children }) => {
  return (
    <div className="pt-3 text-sm text-gray-700">Eigene Hunde: {children}</div>
  );
};

Team.Member.Dog = Dog;

export default Team;
