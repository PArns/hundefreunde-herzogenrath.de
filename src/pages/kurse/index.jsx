import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";
import TatzenHeader from "../../components/tools/tatzenheader";
import { Link } from "gatsby";

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <div className="container mx-auto py-10">
        <TatzenHeader className="pb-10">Kurse & Trainingszeiten</TatzenHeader>

        <p>
          Unsere Kurse finden<strong> wöchentlich</strong> jeweils{" "}
          <strong>samstags</strong> ab 14:00 Uhr auf unserem{" "}
          <Link to="/anfahrt/#main" className="text-sky-800">
            Übungsgelände
          </Link>
          &nbsp;statt. Sollten Sie an einem Probetraining interessiert sein, so
          erscheinen Sie bitte{" "}
          <strong>mindestens 15 Minuten vor Kursbeginn</strong> und melden sich
          einfach bei einem der Kursleiter an. Unsere Kurse sind auf eine Dauer
          von 1/2 Jahr ausgelegt und starten jeweils im April und Oktober. Ein
          Einstieg in die Welpen- bzw. Anfängergruppen ist aber jederzeit, auch
          unabhängig vom Kursbeginn möglich. Alle weiterführenden Kurse setzen
          den erfolgreichen Abschluss des jeweiligen Vorkurses voraus.
        </p>

        <p className="pt-5">
          Ein&nbsp;Probetraining ist selbstverständlich{" "}
          <strong>kostenlos</strong> und <strong>unverbindlich</strong>!
        </p>
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo title="Kurse und Trainingszeiten" />;
};
