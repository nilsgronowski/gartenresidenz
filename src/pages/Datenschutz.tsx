import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-6 py-16 max-w-4xl space-y-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Zurück zur Startseite
      </Link>
      <h1 className="font-display text-4xl">Datenschutzerklärung</h1>
      
      <section className="space-y-3 font-body text-muted-foreground">
        <p>
          Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung 
          personenbezogener Daten (nachfolgend kurz „Daten") im Rahmen der Bereitstellung unserer 
          Webseite auf.
        </p>
      </section>

      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">1. Verantwortlicher</h2>
        <p>Fohrer Select Immobilien GmbH</p>
        <p>Drakestraße 1a<br />D-40545 Düsseldorf</p>
        <p>
          Tel: +49 21 32 – 13 69 -0<br />
          E-Mail: <a href="mailto:info@fohrer-immobilien.de" className="hover:text-primary transition-colors">info@fohrer-immobilien.de</a>
        </p>
      </section>

      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">2. Zugriffsdaten / Server-Logs</h2>
        <p>
          Wir, bzw. unser Hostinganbieter, erheben Daten über jeden Zugriff auf den Server 
          (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören: Name der abgerufenen Webseite, 
          Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen 
          Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL, IP-Adresse 
          und der anfragende Provider.
        </p>
      </section>

      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">3. Cookies</h2>
        <p>
          Unsere Website verwendet Cookies. Sie dienen dazu, unser Angebot nutzerfreundlicher und 
          sicherer zu machen. Sie können die Speicherung der Cookies durch eine entsprechende 
          Einstellung Ihrer Browser-Software verhindern.
        </p>
      </section>

      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">4. Kontaktaufnahme</h2>
        <p>
          Bei der Kontaktaufnahme mit uns (z. B. per Kontaktformular oder E-Mail) werden die Angaben 
          des Nutzers zwecks Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen 
          entstehen, gespeichert.
        </p>
      </section>

      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">5. Rechte der Nutzer</h2>
        <p>
          Nutzer haben das Recht, auf Antrag unentgeltlich Auskunft zu erhalten über die 
          personenbezogenen Daten, die über sie gespeichert wurden. Zusätzlich haben Nutzer das 
          Recht auf Berichtigung unrichtiger Daten, Einschränkung der Verarbeitung und Löschung 
          ihrer personenbezogenen Daten, soweit dem keine gesetzliche Aufbewahrungspflicht 
          entgegensteht.
        </p>
      </section>

      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">6. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, die Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen 
          oder bei Änderungen des Dienstes anzupassen. Die neue Datenschutzerklärung gilt dann bei 
          Ihrem nächsten Besuch.
        </p>
      </section>
    </div>
  </main>
);

export default Datenschutz;
