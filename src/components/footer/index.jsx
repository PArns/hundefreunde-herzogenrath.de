import * as React from "react";

const CurrentYear = () => {
  return <>{new Date().getFullYear()}</>;
};

const Footer = () => {
  return (
    <div className="flex w-full bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between py-4 md:flex-row">
          <div className="flex flex-col">
            <div className="text-xl font-bold">
              Hundefreunde Herzogenrath e.V.
            </div>
            <div className="text-sm">Die Hundeschule im Kreis Aachen</div>
          </div>
        </div>
        <div className="my-4 border-t border-gray-500 pt-4 text-center text-gray-500">
          © <CurrentYear /> Hundefreunde Herzogenrath e.V.
        </div>
      </div>
    </div>
  );
};

export default Footer;
