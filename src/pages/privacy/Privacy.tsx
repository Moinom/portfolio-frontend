import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.privacyWrapper}>
      <h1>Datenschutzerklärung</h1>
      <p>Stand: 12. März 2023</p>
      <h2>Inhaltsübersicht</h2>
      <ul className="index">
        <li>
          <a className="index-link" href="#m3">
            Verantwortliche
          </a>
        </li>
        <li>
          <a className="index-link" href="#mOverview">
            Übersicht der Verarbeitungen
          </a>
        </li>
        <li>
          <a className="index-link" href="#m13">
            Maßgebliche Rechtsgrundlagen
          </a>
        </li>
        <li>
          <a className="index-link" href="#m27">
            Sicherheitsmaßnahmen
          </a>
        </li>
        <li>
          <a className="index-link" href="#m225">
            Bereitstellung des Onlineangebotes und Webhosting
          </a>
        </li>
        <li>
          <a className="index-link" href="#m328">
            Plugins und eingebettete Funktionen sowie Inhalte
          </a>
        </li>
        <li>
          <a className="index-link" href="#m15">
            Änderung und Aktualisierung der Datenschutzerklärung
          </a>
        </li>
      </ul>
      <h2 id="m3">Verantwortliche</h2>
      <p>
        Lisa Strempel
        <br />
        Luruper Hauptstraße 210
        <br />
        22547 Hamburg
        <br />
        Deutschland
      </p>
      E-Mail-Adresse: <p>info@lisa-strempel.de</p>
      <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
      <p>
        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
        die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
        Personen.
      </p>
      <h3>Arten der verarbeiteten Daten</h3>
      <ul>
        <li>Inhaltsdaten.</li>
        <li>Nutzungsdaten.</li>
        <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
      </ul>
      <h3>Kategorien betroffener Personen</h3>
      <ul>
        <li>Nutzer.</li>
      </ul>
      <h3>Zwecke der Verarbeitung</h3>
      <ul>
        <li>Sicherheitsmaßnahmen.</li>
        <li>
          Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
        </li>
        <li>Informationstechnische Infrastruktur.</li>
      </ul>
      <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
      <p>
        Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO,
        auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie
        zur Kenntnis, dass neben den Regelungen der DSGVO nationale
        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
        können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
        maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
      </p>
      <ul>
        <li>
          <strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
          </strong>{' '}
          - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
          Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
          Interessen oder Grundrechte und Grundfreiheiten der betroffenen
          Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
        </li>
      </ul>
      <p>
        Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale
        Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere
        das Gesetz zum Schutz vor Missbr /auch personenbezogener Daten bei der
        Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
        insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
        Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
        personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur
        Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
        einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung
        für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
        Hinblick auf die Begründung, Durchführung oder Beendigung von
        Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten.
        Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur
        Anwendung gelangen.
      </p>
      <h2 id="m27">Sicherheitsmaßnahmen</h2>
      <p>
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
        Berücksichtigung des Stands der Technik, der Implementierungskosten und
        der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
        der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
        Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
        technische und organisatorische Maßnahmen, um ein dem Risiko
        angemessenes Schutzniveau zu gewährleisten.
      </p>
      <p>
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
        Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
        und elektronischen Zugangs zu den Daten als auch des sie betreffenden
        Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
        und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
        eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
        Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
        berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
        Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren
        entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und
        durch datenschutzfreundliche Voreinstellungen.
      </p>
      <p>
        TLS-Verschlüsselung (https): Um Ihre via unserem Online-Angebot
        übermittelten Daten zu schützen, nutzen wir eine TLS-Verschlüsselung.
        Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https://
        in der Adresszeile Ihres br /owsers.
      </p>
      <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
      <p>
        Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur
        Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die
        IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen
        unserer Online-Dienste an den br /owser oder das Endgerät der Nutzer zu
        übermitteln.
      </p>
      <ul className="m-elements">
        <li>
          <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte
          Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
          Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
          Identifikationsnummern, Einwilligungsstatus); Inhaltsdaten (z.B.
          Eingaben in Onlineformularen).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
          Nutzer von Onlinediensten).
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
          Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische
          Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und
          technischen Geräten (Computer, Server etc.).); Sicherheitsmaßnahmen.
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs.
          1 S. 1 lit. f) DSGVO).
        </li>
      </ul>
      <p>
        <strong>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </strong>
      </p>
      <ul className="m-elements">
        <li>
          <strong>
            Bereitstellung Onlineangebot auf gemietetem Speicherplatz:{' '}
          </strong>
          Für die Bereitstellung unseres Onlineangebotes nutzen wir
          Speicherplatz, Rechenkapazität und Software, die wir von einem
          entsprechenden Serveranbieter (auch "Webhoster" genannt) mieten oder
          anderweitig beziehen; <strong>Rechtsgrundlagen:</strong> Berechtigte
          Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </li>
        <li>
          <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff
          auf unser Onlineangebot wird in Form von so genannten
          "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die
          Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
          Uhrzeit des Abr /ufs, übertragene Datenmengen, Meldung über
          erfolgreichen Abr /uf, br /owsertyp nebst Version, das Betriebssystem
          des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall
          IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles
          können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um
          eine Überlastung der Server zu vermeiden (insbesondere im Fall von
          missbr /äuchlichen Angriffen, sogenannten DDoS-Attacken) und zum
          anderen, um die Auslastung der Server und ihre Stabilität
          sicherzustellen; <strong>Rechtsgrundlagen:</strong> Berechtigte
          Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);{' '}
          <strong>Löschung von Daten:</strong> Logfile-Informationen werden für
          die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder
          anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken
          erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen
          Vorfalls von der Löschung ausgenommen.
        </li>
        <li>
          <strong>E-Mail-Versand und -Hosting: </strong>Die von uns in Anspruch
          genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den
          Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden
          die Adressen der Empfänger sowie Absender als auch weitere
          Informationen betreffend den E-Mailversand (z.B. die beteiligten
          Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die
          vorgenannten Daten können ferner zu Zwecken der Erkennung von SPAM
          verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im
          Internet grundsätzlich nicht verschlüsselt versendet werden. Im
          Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber
          (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren
          eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und
          empfangen werden. Wir können daher für den Übertragungsweg der E-Mails
          zwischen dem Absender und dem Empfang auf unserem Server keine
          Verantwortung übernehmen; <strong>Rechtsgrundlagen:</strong>{' '}
          Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
        </li>
        <li>
          <strong>STRATO: </strong>Leistungen auf dem Gebiet der Bereitstellung
          von informationstechnischer Infrastruktur und verbundenen
          Dienstleistungen (z.B. Speicherplatz und/oder Rechenkapazitäten);{' '}
          <strong>Dienstanbieter:</strong> STRATO AG, Pascalstraße 10,10587
          Berlin, Deutschland; <strong>Rechtsgrundlagen:</strong> Berechtigte
          Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);{' '}
          <strong>Website:</strong>{' '}
          <a href="https://www.strato.de" target="_blank" rel="noreferrer">
            https://www.strato.de
          </a>
          ; <strong>Datenschutzerklärung:</strong>{' '}
          <a
            href="https://www.strato.de/datenschutz"
            target="_blank"
            rel="noreferrer"
          >
            https://www.strato.de/datenschutz
          </a>
          ; <strong>Auftragsverarbeitungsvertrag:</strong> Wird vom
          Dienstanbieter bereitgestellt.
        </li>
      </ul>
      <h2 id="m328">Plugins und eingebettete Funktionen sowie Inhalte</h2>
      <p>
        Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein,
        die von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet
        als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um
        Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich
        bezeichnet als "Inhalte”).
      </p>
      <p>
        Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte
        die IP-Adresse der Nutzer verarbeiten, da sie ohne die IP-Adresse die
        Inhalte nicht an deren br /owser senden könnten. Die IP-Adresse ist
        damit für die Darstellung dieser Inhalte oder Funktionen erforderlich.
        Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige
        Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte
        verwenden. Drittanbieter können ferner sogenannte Pixel-Tags
        (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für
        statistische oder Marketingzwecke verwenden. Durch die "Pixel-Tags"
        können Informationen, wie der Besucherverkehr auf den Seiten dieser
        Webseite, ausgewertet werden. Die pseudonymen Informationen können
        ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter
        anderem technische Informationen zum br /owser und zum Betriebssystem,
        zu verweisenden Webseiten, zur Besuchszeit sowie weitere Angaben zur
        Nutzung unseres Onlineangebotes enthalten als auch mit solchen
        Informationen aus anderen Quellen verbunden werden.
      </p>
      <ul className="m-elements">
        <li>
          <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte
          Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
          Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
          Identifikationsnummern, Einwilligungsstatus).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
          Nutzer von Onlinediensten).
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
          Onlineangebotes und Nutzerfreundlichkeit.
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs.
          1 S. 1 lit. f) DSGVO).
        </li>
      </ul>
      <p>
        <strong>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </strong>
      </p>
      <ul className="m-elements">
        <li>
          <strong>Google Fonts (Bezug vom Google Server): </strong>Bezug von
          Schriften (und Symbolen) zum Zwecke einer technisch sicheren,
          wartungsfreien und effizienten Nutzung von Schriften und Symbolen im
          Hinblick auf Aktualität und Ladezeiten, deren einheitliche Darstellung
          und Berücksichtigung möglicher lizenzrechtlicher Beschränkungen. Dem
          Anbieter der Schriftarten wird die IP-Adresse des Nutzers mitgeteilt,
          damit die Schriftarten im br /owser des Nutzers zur Verfügung gestellt
          werden können. Darüber hinaus werden technische Daten
          (Spracheinstellungen, Bildschirmauflösung, Betriebssystem, verwendete
          Hardware) übermittelt, die für die Bereitstellung der Schriften in
          Abhängigkeit von den verwendeten Geräten und der technischen Umgebung
          notwendig sind. Diese Daten können auf einem Server des Anbieters der
          Schriftarten in den USA verarbeitet werden - Beim Besuch unseres
          Onlineangebotes senden die br /owser der Nutzer ihre br /owser
          HTTP-Anfragen an die Google Fonts Web API (d.h. eine
          Softwareschnittstelle für den Abr /uf der Schriftarten). Die Google
          Fonts Web API stellt den Nutzern die Cascading Style Sheets (CSS) von
          Google Fonts und danach die in der CCS angegebenen Schriftarten zur
          Verfügung. Zu diesen HTTP-Anfragen gehören (1) die vom jeweiligen
          Nutzer für den Zugriff auf das Internet verwendete IP-Adresse, (2) die
          angeforderte URL auf dem Google-Server und (3) die HTTP-Header,
          einschließlich des User-Agents, der die br /owser- und
          Betriebssystemversionen der Websitebesucher beschreibt, sowie die
          Verweis-URL (d.h. die Webseite, auf der die Google-Schriftart
          angezeigt werden soll). IP-Adressen werden weder auf Google-Servern
          protokolliert noch gespeichert und sie werden nicht analysiert. Die
          Google Fonts Web API protokolliert Details der HTTP-Anfragen
          (angeforderte URL, User-Agent und Verweis-URL). Der Zugriff auf diese
          Daten ist eingeschränkt und streng kontrolliert. Die angeforderte URL
          identifiziert die Schriftfamilien, für die der Nutzer Schriftarten
          laden möchte. Diese Daten werden protokolliert, damit Google bestimmen
          kann, wie oft eine bestimmte Schriftfamilie angefordert wird. Bei der
          Google Fonts Web API muss der User-Agent die Schriftart anpassen, die
          für den jeweiligen br /owsertyp generiert wird. Der User-Agent wird in
          erster Linie zum Debugging protokolliert und verwendet, um aggregierte
          Nutzungsstatistiken zu generieren, mit denen die Beliebtheit von
          Schriftfamilien gemessen wird. Diese zusammengefassten
          Nutzungsstatistiken werden auf der Seite „Analysen“ von Google Fonts
          veröffentlicht. Schließlich wird die Verweis-URL protokolliert, sodass
          die Daten für die Wartung der Produktion verwendet und ein
          aggregierter Bericht zu den Top-Integrationen basierend auf der Anzahl
          der Schriftartenanfragen generiert werden kann. Google verwendet laut
          eigener Auskunft keine der von Google Fonts erfassten Informationen,
          um Profile von Endnutzern zu erstellen oder zielgerichtete Anzeigen zu
          schalten; <strong>Dienstanbieter:</strong> Google Ireland Limited,
          Gordon House, Barrow Street, Dublin 4, Irland;{' '}
          <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs.
          1 S. 1 lit. f) DSGVO); <strong>Website:</strong>{' '}
          <a href="https://fonts.google.com/" target="_blank" rel="noreferrer">
            https://fonts.google.com/
          </a>
          ; <strong>Datenschutzerklärung:</strong>{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            https://policies.google.com/privacy
          </a>
          ; <strong>Weitere Informationen:</strong>{' '}
          <a
            href="https://developers.google.com/fonts/faq/privacy?hl=de"
            target="_blank"
            rel="noreferrer"
          >
            https://developers.google.com/fonts/faq/privacy?hl=de
          </a>
          .
        </li>
      </ul>
      <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
      <p>
        Wir bitten Sie, sich regelmäßig über den Inhalt unserer
        Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung
        an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen
        dies erforderlich machen. Wir informieren Sie, sobald durch die
        Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder
        eine sonstige individuelle Benachrichtigung erforderlich wird.
      </p>
      <p>
        Sofern wir in dieser Datenschutzerklärung Adressen und
        Kontaktinformationen von Unternehmen und Organisationen angeben, bitten
        wir zu beachten, dass die Adressen sich über die Zeit ändern können und
        bitten die Angaben vor Kontaktaufnahme zu prüfen.
      </p>
      <p className="seal">
        <a
          href="https://datenschutz-generator.de/"
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
          Schwenke
        </a>
      </p>
    </div>
  );
};

export default Privacy;
