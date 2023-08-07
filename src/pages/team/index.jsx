import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";

import Age from "../../components/tools/age";

import Team from "../../components/teammember";

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <TatzenHeader className="pb-5 pt-10">Das Team</TatzenHeader>

      <div className="container mx-auto pb-4">
        <h2>Unsere Trainer</h2>
        Unsere Trainer haben alle jahrelange Erfahrung in der Hundeerziehung und
        Ausbildung und freuen sich, auf jeden neuen Vierbeiner in unseren
        Stunden. Selbstverständlich stehen sie auch mit Rat und Tat nach den
        jeweiligen Kursen zur Verfügung.
        <br />
        <br />
        Egal, ob Euer Hund vom Züchter, aus dem Tierschutz oder aus dem Tierheim
        kommt, bei unseren Trainern findet ihr stets einen kompetenten
        Ansprechpartner.
        <br />
        <br />
        Auch sind bei uns Hunde jeder Größe und Rasse herzlich willkommen!
        <br />
        Solltet ihr vor oder nach den Stunden Fragen haben, so sprecht uns
        einfach an!
      </div>

      <Team>
        <Team.Member
          name="Elisabeth"
          imageName={"elisabeth.jpg"}
          since="2013-01-01"
          mail="elisabeth@hundefreunde-herzogenrath.de"
          kurs="Welpen"
          sex="w"
          dog={[
            "Kiro ",
            <Age birthday="2018-11-01" single=" Jahr" plural=" Jahre" />,
            " (Labrador)",
          ]}
        >
          Wie bei uns allen sind Hundefreunde und Tiere im Allgemeinen ein
          großer Teil meines Lebens. So war es für mich selbstverständlich, dass
          ich eines Tages auch als Trainerin arbeiten wollte. Für sie stehe ich
          jede Woche mit Herz und Seele auf dem Platz.
        </Team.Member>

        <Team.Member
          name="Marianne"
          imageName={"marianne.jpg"}
          since="1900-01-01"
          mail="marianne@hundefreunde-herzogenrath.de"
          kurs="Anfänger"
          sex="w"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Birgit"
          imageName={"birgit.jpg"}
          since="2022-05-01"
          mail="birgit@hundefreunde-herzogenrath.de"
          kurs="Anfänger"
          sex="w"
          dog={[
            "Sam ",
            <Age birthday="2012-01-01" single=" Jahr" plural=" Jahre" />,
            " & Alma ",
            <Age birthday="2022-02-01" single=" Jahr" plural=" Jahre" />,
            " (Golden Retriever)",
          ]}
        >
          Durch unseren 1. Golden Retriever sind wir seit 2006 bei den
          Hundefreunden aktiv. Zuerst nur als Mitglied und Kursteilnehmer, dann
          seit 2010 als Kassiererin im Vorstand und nun im Anfängerkurs seit{" "}
          <Age birthday="2022-05-01" single=" Jahr" plural=" Jahren" /> auf der
          Wiese.
        </Team.Member>

        <Team.Member
          name="Patrick"
          imageName={"patrick.jpg"}
          since="2020-10-17"
          mail="patrick@hundefreunde-herzogenrath.de"
          kurs="BGVP"
          sex="m"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Julia"
          imageName={"julia.jpg"}
          since="2016-11-01"
          mail="julia@hundefreunde-herzogenrath.de"
          kurs="Leistung"
          sex="w"
          dog={[
            "Chilli ",
            <Age birthday="2014-11-01" single=" Jahr" plural=" Jahre" />,
            " (Labrador-Weimaraner)",
          ]}
        >
          2006 bin ich zu den Hundefreunden gestoßen und seit November 2016
          endlich auch als Ausbilderin im Verein tätig. Seit Mai 2022 bin ich
          Mutter von einem kleinen Zwerg, sodass ich leider momentan nicht mehr
          regelmäßig Kurse übernehmen kann, allerdings schlägt mein Herz für den
          BGVP-Kurs.
        </Team.Member>
      </Team>

      <div className="container mx-auto pb-4">
        <h2>Unsere Prüfer</h2>
        Auch wenn es in unseren Stunden auch oft spaßig zugeht, darf eine kleine
        Prüfung oder Leistungsabfrage am Ende des Kurses nicht fehlen. Dazu
        stehen neben unseren Trainern auch unsere Prüfer am Ende eines Semesters
        auf dem Rasen und entscheiden darüber, ob ihr euch in den nächsten Kurs
        wagen dürft.
      </div>

      <Team>
        <Team.Member name="Marianne" imageName={"marianne.jpg"}>
          Da unsere Marianne eine der Trainer mit der meisten Erfahrung ist,
          steht sie nicht nur jede Woche auf dem Übungsplatz, sondern ist auch
          am Ende des Kurses am Richtertisch zu finden.
        </Team.Member>

        <Team.Member name="Heinz" imageName={"heinz.jpg"}>
          Unser Heinz ist ein wichtiger Allrounder, daher ist er aktuell kein
          aktiver Trainer mehr, um sich voll und ganz seiner Aufgabe als Prüfer
          zu widmen.
        </Team.Member>

        <Team.Member name="Udo" imageName={"udo.jpg"}>
          Unser Udo komplettiert das Dreigestirn der Prüfer und ist mit das
          Urgestein am Prüfertisch. Von ihm bekommt ihr auch, solltet ihr die
          Prüfung erfolgreich bestanden haben, Urkunde, Pokal oder Anstecknadel.
        </Team.Member>
      </Team>

      <div className="container mx-auto pb-4">
        <h2>Catering</h2>
        Da die Übungsstunden auch schon einmal etwas anstrengender sein können,
        wird im Vereinsheim für das leibliche Wohl in Form von Getränken und
        kleiner Snacks für Frauchen, Herrchen und Vierbeiner gesorgt. Die
        Einnahmen kommen hier rein dem Verein, Material und unserem Platz zu
        Gute!
        <br />
        <br />
        Auch hier suchen wir immer helfende Hände! Habt ihr also Zeit und Lust
        uns zu unterstützen, so meldet euch doch gerne beim Catering-Team!
      </div>

      <Team>
        <Team.Member name="Moni" imageName={"moni.jpg"}>
          Jeder Verein braucht eine gute Seele, die mit einem freundlichen
          Lächeln hinter der Theke unseren Gästen das eine oder andere kühle
          Getränk serviert und immer für einen Plausch zu haben ist.
          <p className="pb-4" />
          Leider ist sie derzeit die einzige, die jede Woche unermütlich die
          Stellung hält! Solltet ihr euch also berufen fühlen, würde sich Moni
          über eine nette Kollegin oder Kollegen freuen.
        </Team.Member>
      </Team>

      <div className="container mx-auto pb-4">
        <h2>Der Bau-Trupp</h2>
        Neben dem eigentlichen Trainingsbetrieb, gibt es rund um den Platz
        natürlich auch immer wieder genug zu tun! Neben unserem Rasen, der
        eigentlich immer geschnitten werden muss, stehen aber auch noch andere
        Aufgaben wie Hecke schneiden, Bäume stutzen oder auch das Kehren und
        Räumen der Wege an. Nicht zuletzt aller helfenden Hände gedankt, strahlt
        unser Verein jeden Samstag in frischem Glanz!
        <br />
        <br />
        Helfende Hände werden deshalb immer gesucht und gerne gesehen! Habt ihr
        Lust und Zeit uns als Verein zu unterstützen, so sprecht doch einfach
        unser Catering-Team an.
      </div>

      <Team>
        <Team.Member name="Heinz" imageName={"heinz.jpg"}>
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Jürgen"
          imageName={"juergen.jpg"}
          title="Der Rasenmähermann"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member name="Michael" imageName={"michael.jpg"}>
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>
      </Team>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo title={"Unser Team"} />;
};
