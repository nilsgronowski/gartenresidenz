const Datenschutz = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-6 py-16 max-w-4xl space-y-8">
      <h1 className="font-display text-4xl">Datenschutzerklärung</h1>
      <section className="space-y-3 font-body text-muted-foreground">
        <p>Verantwortlicher: Gartenresidenz am Denkmal, Niederlöricker Straße 4, 40667 Meerbusch.</p>
        <p>Kontakt: info@fohrer-immobilien.de</p>
      </section>
      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Erhebung personenbezogener Daten</h2>
        <p>Wir verarbeiten Kontaktdaten ausschließlich zur Bearbeitung Ihrer Anfrage. Keine Weitergabe an Dritte ohne Rechtsgrundlage.</p>
      </section>
      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Hosting & Logs</h2>
        <p>Server-Logfiles (IP-Adresse, Zeitstempel, User-Agent) können erfasst werden und werden turnusmäßig gelöscht.</p>
      </section>
      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Formulare</h2>
        <p>Eingaben werden ausschließlich zur Kontaktaufnahme genutzt. Für den Versand per E-Mail ist ein externer Dienst zu konfigurieren.</p>
      </section>
      <section className="space-y-2 font-body text-muted-foreground">
        <h2 className="font-display text-2xl text-foreground">Ihre Rechte</h2>
        <p>Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Beschwerde bei der zuständigen Aufsichtsbehörde.</p>
      </section>
    </div>
  </main>
);

export default Datenschutz;
