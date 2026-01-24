const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground">
                Das Projekt
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
                Architektur, die <br />
                <span className="italic">Lebensqualität</span> schafft
              </h2>
            </div>

            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                Die Residenz am Parkblick vereint zeitgenössische Architektur mit der 
                Wärme eines echten Zuhauses. Jede der zwölf Eigentumswohnungen wurde 
                mit Bedacht auf Licht, Raum und Lebensqualität entworfen.
              </p>
              <p>
                Großzügige Fensterfronten öffnen den Blick auf die grüne Parklandschaft, 
                während hochwertige Naturmaterialien im Inneren eine Atmosphäre der 
                Geborgenheit schaffen. Die durchdachten Grundrisse bieten Flexibilität 
                für unterschiedliche Lebenssituationen.
              </p>
              <p>
                Von der Planung bis zur Fertigstellung steht eines im Mittelpunkt: 
                Ihr künftiges Zuhause soll ein Ort sein, an dem Sie zur Ruhe kommen 
                und neue Kraft schöpfen können.
              </p>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="font-display text-4xl text-primary">12</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Wohneinheiten</p>
              </div>
              <div>
                <span className="font-display text-4xl text-primary">65–180</span>
                <p className="font-body text-sm text-muted-foreground mt-1">m² Wohnfläche</p>
              </div>
              <div>
                <span className="font-display text-4xl text-primary">2026</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Bezugsfertig</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Moderne Architektur"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sand-light rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
