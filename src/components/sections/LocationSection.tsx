import { MapPin, Train, ShoppingBag, Trees, GraduationCap, Coffee } from "lucide-react";

const locationFeatures = [
  {
    icon: Train,
    title: "Öffentliche Anbindung",
    description: "U-Bahn Böhmerwaldplatz in 5 Gehminuten",
  },
  {
    icon: ShoppingBag,
    title: "Einkaufsmöglichkeiten",
    description: "Arabellapark Shopping Center 10 Min. entfernt",
  },
  {
    icon: Trees,
    title: "Naherholung",
    description: "Direkter Zugang zum Englischen Garten",
  },
  {
    icon: GraduationCap,
    title: "Bildungseinrichtungen",
    description: "Internationale Schulen in der Umgebung",
  },
  {
    icon: Coffee,
    title: "Gastronomie",
    description: "Ausgewählte Restaurants und Cafés fußläufig",
  },
  {
    icon: MapPin,
    title: "Stadtzentrum",
    description: "Marienplatz in 15 Minuten erreichbar",
  },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-sand-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Map / Image Area */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="München Bogenhausen Luftaufnahme"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Address Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-xl text-foreground">
                    Residenz am Parkblick
                  </h4>
                  <p className="font-body text-muted-foreground mt-1">
                    Ismaninger Straße 142<br />
                    81675 München-Bogenhausen
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
                München-Bogenhausen:<br />
                <span className="italic">Leben im Grünen</span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              Bogenhausen gehört zu den exklusivsten Wohnvierteln Münchens. 
              Die Kombination aus grüner Parklandschaft, hervorragender Infrastruktur 
              und der Nähe zur Innenstadt macht diesen Standort einzigartig.
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
