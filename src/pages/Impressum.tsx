import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-6 py-16 max-w-4xl space-y-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Zurück zur Startseite
      </Link>
      <h1 className="font-display text-4xl">Impressum</h1>
      
      <section className="space-y-3 font-body text-muted-foreground">
        <p className="font-semibold text-foreground">Fohrer Select Immobilien GmbH</p>
        <p>Drakestraße 1a<br />D-40545 Düsseldorf</p>
        <p>HRB 73760, Amtsgericht Düsseldorf<br />GF: Vanessa Schulz (Gesellschafterin)</p>
        <p>Tel: +49 21 32 – 13 69 -0<br />E-Mail: <a href="mailto:info@fohrer-immobilien.de" className="hover:text-primary transition-colors">info@fohrer-immobilien.de</a></p>
      </section>

      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Erlaubnis nach §34c der Gewerbeordnung</h2>
        <p>Erlaubnis durch die Stadt Düsseldorf:</p>
        <p>Ordnungsamt Düsseldorf<br />Worringer Str. 111<br />40210 Düsseldorf</p>
      </section>

      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Inhaltlich verantwortlich</h2>
        <p>Inhaltlich verantwortlich nach §55 Abs. 2 RStV: Vanessa Schulz</p>
      </section>

      <section className="space-y-3 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Haftungsausschluss</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
          entfernen.
        </p>
      </section>

      <section className="space-y-3 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
          mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung 
          nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
          werden wir derartige Links umgehend entfernen.
        </p>
      </section>

      <section className="space-y-3 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
          Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
          nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
          Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
          Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um 
          einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
          Inhalte umgehend entfernen.
        </p>
      </section>
    </div>
  </main>
);

export default Impressum;
