import { Home, MapPin, Calendar, Leaf, Shield, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Home,
    title: "12 Wohneinheiten",
    description: "Großzügige 2- bis 5-Zimmer-Wohnungen von 65 bis 180 m²",
  },
  {
    icon: MapPin,
    title: "Premium-Lage",
    description: "Ruhige Parkrandlage im Herzen von Bogenhausen",
  },
  {
    icon: Calendar,
    title: "Fertigstellung 2026",
    description: "Bezugsfertig im Frühjahr 2026",
  },
  {
    icon: Leaf,
    title: "Nachhaltig",
    description: "KfW-40 Standard mit Geothermie und Photovoltaik",
  },
  {
    icon: Shield,
    title: "Hochwertig",
    description: "Erstklassige Materialien und Markenausstattung",
  },
  {
    icon: Sparkles,
    title: "Individuell",
    description: "Flexible Grundrisse nach Ihren Wünschen",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground">
            Auf einen Blick
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
            Die Highlights
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group bg-background p-8 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-sand-light flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
