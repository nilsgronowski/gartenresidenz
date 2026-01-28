const Impressum = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-6 py-16 max-w-4xl space-y-8">
      <h1 className="font-display text-4xl">Impressum</h1>
      <section className="space-y-3 font-body text-muted-foreground">
        <p>Gartenresidenz am Denkmal</p>
        <p>Niederlöricker Straße 4<br />40667 Meerbusch</p>
        <p>Telefon: +49 (0) 2132 13 69 0</p>
        <p>E-Mail: info@fohrer-immobilien.de</p>
      </section>
      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Vertretungsberechtigte</h2>
        <p>Angaben des verantwortlichen Unternehmens ergänzen.</p>
      </section>
      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Aufsichtsbehörde</h2>
        <p>Informationen zur zuständigen Aufsichtsbehörde hier ergänzen.</p>
      </section>
      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Umsatzsteuer-ID</h2>
        <p>USt-IdNr.: bitte ergänzen.</p>
      </section>
      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Haftungsausschluss</h2>
        <p>Alle Angaben ohne Gewähr; Änderungen vorbehalten.</p>
      </section>
    </div>
  </main>
);

export default Impressum;
