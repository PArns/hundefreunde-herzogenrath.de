import * as React from "react";

import KursBox from "../../components/kursbox";

const Kurse = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-4 lg:grid-cols-4 py-5 md:py-10 px-2">
      <KursBox
        name="Welpen"
        imageName={"welpen.jpg"}
        timeText="Der Welpenkurs findet von 14:00 Uhr bis 15:00 Uhr statt"
      >
        Der Welpenkurs ist für die Kleinsten unter uns gedacht und bietet für
        Hunde, bis 6 Monate, sowie Herrchen und Frauchen eine Grundeinführung
        für den neuen Hausbewohner an.
      </KursBox>

      <KursBox
        name="Anfänger"
        imageName={"anfaenger.jpg"}
        timeText="Der Anfängerkurs findet von 14:00 Uhr bis 15:00 Uhr statt"
      >
        Im Anfängerkurs geht es um die Grundkommandos und den Grundgehorsam des
        Vierbeiners.
      </KursBox>

      <KursBox
        name="BGVP"
        imageName={"bgvp.jpg"}
        timeText="Der BGVP-Kurs findet von 15:15 Uhr bis 16:15 Uhr statt"
      >
        In diesem Kurs, der mit einer der anspruchvollsten ist, findet das
        Training primär ohne Leine statt und bereitet Herrchen, Frauchen und
        Hund auf viele Alltagssituationen vor.
      </KursBox>

      <KursBox
        name="Leistung"
        imageName={"leistung.jpg"}
        timeText="Der Leistungskurs findet von 16:30 Uhr bis 17:30 Uhr statt"
      >
        Im Leistungskurs werden die Übungen der BGVP weiter vertieft. Hier
        können die Teilnehmer die Leistungsabzeichen Bronze, Silber und Gold
        erwerben.
      </KursBox>
    </div>
  );
};

export default Kurse;
