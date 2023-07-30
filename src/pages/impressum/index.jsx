import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";
import Obfuscate from "react-obfuscate";

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <div className="container mx-auto">
        <TatzenHeader className="py-10">Impressum</TatzenHeader>

        <div className="mb-5">
          <h3 className="mb-1">Hundefreunde Herzogenrath e.V.</h3>
          Grenzstraße 9 - 52134 Herzogenrath
          <br />
          Vereinsregister Aachen VR 3387
        </div>

        <div className="mb-5">
          <h3 className="mb-1">Kontakt</h3>
          Florian Brauers
          <br />
          Nobelstraße 28
          <br />
          52134 Herzogenrath
          <br />
          E-Mail:{" "}
          <Obfuscate
            className="text-sky-800"
            email={"info@hundefreunde-herzogenrath.de"}
          />
          <br />
          Internet: https://hundefreunde-herzogenrath.de
        </div>

        <div className="mb-5">
          <h3 className="mb-1">Vorstand</h3>
          1. Vorsitzender: Florian Brauers <br />
          2. Vorsitender: Patrick Arns <br />
          1. Kassiererin: Birgit Riedelbauch
        </div>

        <div className="mb-5">
          <h3 className="mb-1">Verantwortlich für den Inhalt</h3>
          Hundefreunde Herzogenrath e.V. – Der Vorstand
        </div>

        <div className="mb-5">
          <h3 className="mb-1">Pflege & technische Betreuung</h3>
          <a
            href="https://patrick-arns.de"
            target="_blank"
            className="text-sky-800"
            rel="noreferrer"
          >
            Patrick Arns
          </a>
        </div>

        <div className="mb-5">
          <h3 className="mb-1">Bildmaterial</h3>
          <a
            href="https://patrick-arns.de"
            target="_blank"
            className="text-sky-800"
            rel="noreferrer"
          >
            Patrick Arns - https://patrick-arns.de
          </a>
          <br />
          <a
            href="https://unsplash.com"
            target="_blank"
            className="text-sky-800"
            rel="noreferrer"
          >
            Unsplash - https://unsplash.com
          </a>
          <br />
        </div>

        <div className="mb-5">
          <h3 className="mb-1">Disclaimer</h3>
          <div className="mb-3">
            <p>
              <b>1. Haftungsbeschränkung</b>
              <br />
              Die Inhalte des Internetauftritts wurden mit größtmöglicher
              Sorgfalt und nach bestem Gewissen erstellt. Dennoch übernimmt der
              Anbieter dieser Webseite keine Gewähr für die Aktualität,
              Vollständigkeit und Richtigkeit der bereitgestellten Seiten und
              Inhalte.
            </p>

            <p>
              Als Diensteanbieter ist der Anbieter dieser Webseite gemäß § 7
              Abs. 1 TMG für eigene Inhalte und bereitgestellte Informationen
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich;
              nach den §§ 8 bis 10 TMG jedoch nicht verpflichtet, die
              übermittelten oder gespeicherten fremden Informationen zu
              überwachen. Eine Entfernung oder Sperrung dieser Inhalte erfolgt
              umgehend ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung. Eine Haftung ist erst ab dem Zeitpunkt der
              Kenntniserlangung möglich.
            </p>
          </div>

          <div className="mb-3">
            <b>2. Externe Links</b>
            <br />
            Die Webseite enthält sog. „externe Links“ (Verlinkungen) zu anderen
            Webseiten, auf deren Inhalt der Anbieter der Webseite keinen
            Einfluss hat. Aus diesem Grund kann der Anbieter für diese Inhalte
            auch keine Gewähr übernehmen.
            <br />
            Für die Inhalte und Richtigkeit der bereitgestellten Informationen
            ist der jeweilige Anbieter der verlinkten Webseite verantwortlich.
            Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.
            Bei Bekanntwerden einer solchen Rechtsverletzung wird der Link
            umgehend entfernen.
          </div>

          <div className="mb-3">
            <b>3. Urheberrecht/Leistungsschutzrecht</b>
            <br />
            Die auf dieser Webseite veröffentlichten Inhalte, Werke und
            bereitgestellten Informationen unterliegen dem deutschen
            Urheberrecht und Leistungsschutzrecht. Jede Art der
            Vervielfältigung, Bearbeitung, Verbreitung, Einspeicherung und jede
            Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf
            der vorherigen schriftlichen Zustimmung des jeweiligen
            Rechteinhabers. Das unerlaubte Kopieren/Speichern der
            bereitgestellten Informationen auf diesen Webseiten ist nicht
            gestattet und strafbar.
          </div>

          <div className="mb-3">
            <b>4. Datenschutz</b>
            <br />
            Durch den Besuch des Internetauftritts können Informationen (Datum,
            Uhrzeit, aufgerufene Seite) über den Zugriff auf dem Server
            gespeichert werden. Es werden keine personenbezogenenen (z. B. Name,
            Anschrift oder E-Mail-Adresse) Daten, gespeichert.
            <p>
              Sofern personenbezogene Daten erhoben werden, erfolgt dies, sofern
              möglich, nur mit dem vorherigen Einverständnis des Nutzers der
              Webseite. Eine Weitergabe der Daten an Dritte findet ohne
              ausdrückliche Zustimmung des Nutzers nicht statt.
            </p>
            <p>
              Der Anbieter weist darauf hin, dass die Übertragung von Daten im
              Internet (z. B. per E-Mail) Sicherheitslücken aufweisen und ein
              lückenloser Schutz der Daten vor dem Zugriff Dritter nicht
              gewährleistet werden kann. Der Anbieter übernimmt keine Haftung
              für die durch solche Sicherheitslücken entstandenen Schäden.
            </p>
            <p>
              Der Verwendung der Kontaktdaten durch Dritte zur gewerblichen
              Nutzung wird ausdrücklich widersprochen. Es sei denn, der Anbieter
              hat zuvor seine schriftliche Einwilligung erteilt.
              <br />
              Der Anbieter behält sich rechtliche Schritte für den Fall der
              unverlangten Zusendung von Werbeinformationen, z. B. durch
              Spam-Mails, vor.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo title="Impressum" />;
};
