import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import { Link } from "gatsby";

import TatzenHeader from "../../components/tools/tatzenheader";
import Anfahrt from "../../sections/anfahrt";
import Obfuscate from "react-obfuscate";

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <div className="container mx-auto text-center">
        <TatzenHeader className="py-10">Anfahrt</TatzenHeader>
        <div className="mb-3">
          <h3>Hundefreunde Herzogenrath e.V.</h3>
          Grenzstraße 9 - 52134 Herzogenrath
        </div>
        Ihr findet uns in Herzogenrath in der{" "}
        <a
          href="https://goo.gl/maps/zpao9B6dkfcNnrYt9"
          className="text-sky-800"
          target="_blank"
        >
          Grenzstraße 9
        </a>
        , direkt an der niederländischen Grenze.
        <br />
        <br />
        Wir freuen uns immer über neue Fellnasen und deren Besitzer.
        Selbstverständlich bieten wir zu unseren Trainingszeiten ein
        unverbindliches und <b>kostenloses Schnuppertraining</b> an, an dem ihr
        euch gerne einmal Verein und Platz anschauen könnt. Die entsprechenden
        Termine und Trainingszeiten findet ihr{" "}
        <Link className="text-sky-800" to="/termine/#main">
          HIER
        </Link>
        .
        <br />
        <br />
        Solltet ihr vorab weitere Fragen haben, könnt ihr uns gerne eine E-Mail
        an{" "}
        <Obfuscate
          className="text-sky-800"
          email={"info@hundefreunde-herzogenrath.de"}
        />{" "}
        schreiben.
        <Anfahrt header={false} address={false} className="mb-5" />
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};
