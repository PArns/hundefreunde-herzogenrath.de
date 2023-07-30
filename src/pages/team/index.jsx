import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";

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
        Solltet ihr vor oder nach den Stunden Fragen haben, so sprecht uns
        einfach an!
      </div>

      <Team>
        <Team.Member
          name="Birgit"
          imageName={"birgit.jpg"}
          since="2010-01-01"
          mail="birgit"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Elisabeth"
          imageName={"elisabeth.jpg"}
          since="2000-01-01"
          mail="elisabeth"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Julia"
          imageName={"julia.jpg"}
          since="2000-01-01"
          mail="julia"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Marianne"
          imageName={"marianne.jpg"}
          since="2000-01-01"
          mail="marianne"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Patrick"
          imageName={"patrick.jpg"}
          since="2000-01-01"
          mail="patrick"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>
      </Team>

      <div className="container mx-auto pb-4">
        <h2>Catering</h2>
        Damit ihr vor und nach den Stunden natürlich nicht verhungern und
        verdursten müsst. Bieten wir in unserem Vereinsheim die Eine oder Andere
        leckerei an. Neben heißen und kühlen Getränken erhaltet ihr auch Snacks
        innerhalb des Verheinsheims. Die Einnahmen kommen hier rein dem Verein,
        Material und unserem Platz zu Gute!
        <br />
        <br />
        Auch hier suchen wir immer helfende Hände! Habt ihr also Zeit und Lust
        uns zu unterstützen, so meldet euch doch gerne beim Catering-Team!
      </div>

      <Team>
        <Team.Member
          name="Moni"
          imageName={"moni.jpg"}
        >
          Hallo Welt, hier muss noch Text hin!
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
        <Team.Member
          name="Heinz"
          imageName={"heinz.jpg"}
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Jürgen"
          imageName={"juergen.jpg"}
          title="Der Rasenmähermann"
        >
          Hallo Welt, hier muss noch Text hin!
        </Team.Member>

        <Team.Member
          name="Michael"
          imageName={"michael.jpg"}
        >
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
