import * as React from "react";
import { Analytics } from "@vercel/analytics/react";

import Hero from "../../components/header/hero";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Hero imageName="gruppe.jpg">
        <Hero.Title>Hundefreunde Herzogenrath</Hero.Title>
        <Hero.SubTitle>Die Hundeschule im Kreis Aachen</Hero.SubTitle>
      </Hero>

      {children}

      <Analytics />
    </div>
  );
};

export default MainLayout;
