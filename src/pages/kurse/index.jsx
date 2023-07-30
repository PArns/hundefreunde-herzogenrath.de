import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";
import TatzenHeader from "../../components/tools/tatzenheader";
import { Link } from "gatsby";
import KursInfo from "../../components/kursinfo";

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

      <KursInfo>
        <KursInfo.Kurs
          name="Welpen-Gruppe"
          imageName={"welpen.jpg"}
          trainer={["Elisabeth"]}
          timeText="Der Welpenkurs findet von 14:00 Uhr bis 15:00 Uhr statt"
        >
          An dem Tag, an dem der Welpe sein neues Zuhause bezieht, sollte auch
          bereits mit der Ausbildung begonnen werden. Hierzu gehört es dem neuen
          Familienmitglied die Möglichkeit zu geben, seinen natürlichen
          aggressiven Spiel-drang mit Artgenossen auszuleben. In der
          Welpengruppe werden deshalb Hunde von 2 bis 6 Monaten langsam und
          spielerisch an verschiedene Aufgaben herangeführt. Neben dem
          Nachstellen verschiedener alltäglicher Situationen wie einem
          Tierarztbesuch, der Futteraufnahme und vielem mehr, wird das
          „Fuß“-gehen, das Abrufen und die Ausführung der Ruhekommandos Sitz und
          Platz eingeführt.
        </KursInfo.Kurs>

        <KursInfo.Kurs
          name="Anfänger- & Junghund-Gruppe"
          imageName={"anfaenger.jpg"}
          trainer={["Birgit", "Marianne"]}
          timeText="Der Anfängerkurs findet von 14:00 Uhr bis 15:00 Uhr statt"
        >
          Junghunde ab 6 Monaten und Hunde ohne Ausbildung werden in dieser
          Gruppe zum Grundgehorsam geführt. Es werden die Kommandos „Hier“,
          „Fuß“, „Sitz“, „Steh“ und „Platz“ behandelt. Das kontrollierte Spiel
          der Hunde untereinander rundet diese Ausbildungsstufe ab. Die
          Ausbildung wird mit einem Leistungsvergleich (Überprüfung) der
          Teilnehmer abgeschlossen.
        </KursInfo.Kurs>

        <KursInfo.Kurs
          name="BGVP-Gruppe"
          imageName={"bgvp.jpg"}
          trainer={["Patrick"]}
          timeText="Der BGVP-Kurs findet von 15:15 Uhr bis 16:15 Uhr statt"
        >
          Ziel dieser Gruppe ist das Ablegen der Begleithunde-Gehorsams-, und
          Verkehrssicherheitsprüfung, des sog. „Hundeführerscheins“. Diese
          Prüfung wird nach dem Kursende von Leistungsrichtern unseres Vereins
          abgenommen und bewertet. Mit dem Ablegen dieser Prüfung stellt der
          Hundeführer unter Beweis, dass er seinen Hund in jeder Situation
          beherrscht und dies nicht nur an der Leine, sondern auch in der
          Freifolge. Diese Prüfung gliedert sich insgesamt in 3 einzelne Teile,
          die jeweils einzeln bestanden werden müssen:
          <ul className="ml-4 mt-2 list-disc">
            <li>Schriftliche Prüfung</li>
            <li>Prüfung im öffentlichen Straßenverkehr</li>
            <li>Prüfung auf dem Übungsgelände</li>
          </ul>
        </KursInfo.Kurs>

        <KursInfo.Kurs
          name="Leistung"
          imageName={"leistung.jpg"}
          trainer={["Julia"]}
          timeText="Der Leistungskurs findet von 16:30 Uhr bis 17:30 Uhr statt"
        >
          Im Leistungskurs werden die Übungen der BGVP weiter vertieft, bei
          diesem Kurs handelt es sich um die "Königsklasse" unseres Trainings,
          bei dem alle Leistungsanwärter zusammen in einem Kurs trainieren. Hier
          können die Teilnehmer die Leistungsabzeichen Bronze, Silber und Gold
          erwerben.
        </KursInfo.Kurs>
      </KursInfo>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo title="Kurse und Trainingszeiten" />;
};
