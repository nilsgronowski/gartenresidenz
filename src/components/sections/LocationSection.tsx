import { MapPin, Train, ShoppingBag, Trees, GraduationCap, Coffee } from "lucide-react";

interface LocationSectionProps {
  location: string;
}

const locationFeatures = [
  {
    icon: MapPin,
    title: "Rheinnähe",
    description: "Wenige Minuten zu den Rheinauen in Meerbusch-Büderich",
  },
  {
    icon: Train,
    title: "ÖPNV",
    description: "U76 Richtung Düsseldorf und Krefeld in kurzer Distanz",
  },
  {
    icon: ShoppingBag,
    title: "Einkaufen",
    description: "Zentrum Büderich & Düsseldorf-Oberkassel schnell erreichbar",
  },
  {
    icon: GraduationCap,
    title: "Schulen / Kitas",
    description: "Kitas, Grund- und weiterführende Schulen im nahen Umfeld",
  },
  {
    icon: Coffee,
    title: "Gastronomie",
    description: "Cafés und Restaurants in Büderich, Lörick und Oberkassel",
  },
  {
    icon: Trees,
    title: "Erholung",
    description: "Parks, Rheinwiesen und Sportangebote fuß- oder radläufig",
  },
];

const LocationSection = ({ location }: LocationSectionProps) => {
  return (
    <section id="location" className="py-24 bg-sand-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Map / Image Area */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src="/assets/units/we8-1.jpg"
                alt="Außenvisualisierung Gartenresidenz am Denkmal"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Address Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-xl text-foreground">
                    Gartenresidenz am Denkmal
                  </h4>
                  <p className="font-body text-muted-foreground mt-1">
                    {location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground">
                Die Lage
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
                Meerbusch-Büderich:<br />
                <span className="italic">Am Rhein zuhause</span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              Ruhige Lage zwischen Rheinauen und Düsseldorf: kurze Wege in die Innenstadt, 
              gewachsene Nachbarschaft in Büderich und viel Grün direkt vor der Tür.
            </p>

            {/* Location Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-foreground">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
