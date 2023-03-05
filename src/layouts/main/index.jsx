import * as React from "react";
import { Analytics } from "@vercel/analytics/react";

import Hero from "../../components/header/hero";
import Footer from "../../components/footer";

const MainLayout = ({ children, headerImage="gruppe.jpg", location }) => {
  const items = [
    { name: "Willkommen", href: "/" },
    { name: "News", href: "/blog/" },
    { name: "Kurse", href: "/kurse/" },
    { name: "Termine", href: "/termine/" },
    { name: "Team", href: "/team/" },
    { name: "Bilder", href: "/bilder/" },
    { name: "Anfahrt", href: "/anfahrt/" },
  ];

  return (
    <div>
      <Hero imageName={headerImage}>
        <Hero.Title>Hundefreunde Herzogenrath</Hero.Title>
        <Hero.SubTitle>Die Hundeschule im Kreis Aachen</Hero.SubTitle>
        <Hero.Menu items={items} location={location} />
      </Hero>

      <div className="container mx-auto px-4" id="main">
        {children}
      </div>

      <Footer />
      <Analytics />
    </div>
  );
};

export default MainLayout;
