import * as React from "react";

import TatzenHeader from "../../components/tools/tatzenheader";
import { StaticImage } from "gatsby-plugin-image";

const AboutUs = ({ className }) => {
  return (
    <div className={className}>
      <TatzenHeader>Wir stellen uns vor</TatzenHeader>
      <div className="mt-4 flex">
        <div>
          <h3>Die Hundefreunde Herzogenrath</h3>
          <p className="my-4">
            gibt es seit 1996. Wir blicken damit auf eine lange
            Geschichte und viel Erfahrung zurück.
          </p>
          <p className="my-4">
            Unsere ehrenamtlichen Trainer geben Euch hier, in einfachen
            Schritten, nachvollziehbare und effektive Trainingseinheiten.
          </p>
          <p className="my-4">
            Ganz klassisch bieten wir in verschiedenen Gruppen das Training und
            die Erziehung des Hundes, vorallem aber auch die des Hundeführers
            an. Hierbei unterteilen wir die Ausbildung und das Training in
            verschiedene Gruppen, je nach Wissensstand und Alter der Hunde.
          </p>
          <ul className="ml-10 list-disc">
            <li>Welpen - Für Hunde bis 6 Monate</li>
            <li>Anfänger - Einsteigerkurs</li>
            <li>BGVP - Begleit- Gehorsam- &amp; Verkehrs-Prüfung</li>
            <li>Leistung (mit Abzeichen Bronze, Silber & Gold)</li>
          </ul>
        </div>
        <div>
          <StaticImage
            src={"../../images/team/trainer.jpg"}
            className="ml-5 rounded-full drop-shadow-lg"
            alt="Trainer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
