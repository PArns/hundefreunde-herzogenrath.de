import * as React from "react";
import { Analytics } from "@vercel/analytics/react";

import Hero from "../../components/header/hero";
import Footer from "../../components/footer";

const MainLayout = ({
  children,
  heroImage = "gruppe.jpg",
  heroTitle = "Hundefreunde Herzogenrath",
  heroSubTitle = "Die Hundeschule im Kreis Aachen",
  location,
}) => {
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
    <>
      <Hero imageName={heroImage}>
        <Hero.Title>{heroTitle}</Hero.Title>
        <Hero.SubTitle>{heroSubTitle}</Hero.SubTitle>
        <Hero.Menu items={items} location={location} />
      </Hero>

      <div id="main">{children}</div>

      <Footer />
      <Analytics />
    </>
  );
};

export default MainLayout;
