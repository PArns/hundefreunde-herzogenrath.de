import * as React from "react";

import Seo from "../components/tools/seo";
import MainLayout from "../layouts/main";

import Kurse from "../sections/kurse";

import { HeartIcon } from "@heroicons/react/24/solid";

import FixedBackground from "../components/tools/fixedbackground";
import { Link } from "gatsby";

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <Kurse />

      <FixedBackground
        imageName="hundmitwelpe.jpg"
        className="grid place-content-center py-12 text-4xl font-bold text-white drop-shadow-lg md:py-16 md:text-6xl lg:py-20 lg:text-8xl xl:py-28 xl:text-9xl"
      >
        <div className="grid-row grid place-content-center">
          <div className="flex flex-row justify-center">
            Wir
            <span className="relative mx-1 h-12 w-12 text-red-500 md:h-16 md:w-16 lg:mx-2 lg:h-24 lg:w-24 xl:mx-6 xl:h-36 xl:w-36">
              <span className="absolute inline-flex h-full w-full ">
                <HeartIcon className="animate-ping" />
              </span>
              <span className="relative inline-flex h-full w-full">
                <HeartIcon />
              </span>
            </span>
            Hunde!
          </div>
        </div>
        <div className="text-center lg:-mt-6">
          <Link
            to="/anfahrt/#main"
            className="rounded-lg bg-sky-500 p-3 text-base lg:text-2xl"
          >
            Besucht uns doch zu einer Probestunde!
          </Link>
        </div>
      </FixedBackground>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};
