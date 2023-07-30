import * as React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import Obfuscate from "react-obfuscate";
import { Link } from "gatsby";

const CurrentYear = () => {
  return <>{new Date().getFullYear()}</>;
};

const Footer = () => {
  return (
    <div className="flex w-full bg-gray-800 px-2 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between pt-4 md:flex-row">
          <div className="flex flex-col">
            <div className="text-xl font-bold">
              Hundefreunde Herzogenrath e.V.
            </div>
            <div className="mb-2 text-sm">Die Hundeschule im Kreis Aachen</div>
            <div className="flex text-sm">
              <MapPinIcon className="mr-1 w-4" /> Grenzstr. 9 - 52134
              Herzogenrath
            </div>
            <div className="flex text-sm">
              <EnvelopeIcon className="mr-1 w-4" />{" "}
              <Obfuscate email={"info@hundefreunde-herzogenrath.de"} />
            </div>
          </div>
          <div className="mx-auto hidden flex-col md:flex">
            <div className="text-md">
              <div>
                <Link to="/kurse/#main">Kurse</Link>
              </div>
              <div>
                <Link to="/termine/#main">Termine</Link>
              </div>
              <div>
                <Link to="/team/#main">Team</Link>
              </div>
              <div>
                <Link to="/impressum/#main">Impressum</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 border-t border-gray-500 pt-2 text-center text-gray-500">
          © <CurrentYear /> Hundefreunde Herzogenrath e.V.
        </div>
      </div>
    </div>
  );
};

export default Footer;
