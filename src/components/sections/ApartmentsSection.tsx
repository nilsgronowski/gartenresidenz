import ApartmentCard from "@/components/ApartmentCard";
import type { RealEstateObject } from "@/types";

interface ApartmentsSectionProps {
  apartments: RealEstateObject[];
}

const localApartments = [
  {
    id: 1,
    name: "Wohnung A1",
    type: "2-Zimmer",
    size: 65,
    floor: "Erdgeschoss",
    rooms: 2,
    features: ["Terrasse", "Gartenzugang", "Einbauküche"],
    status: "available" as const,
    price: "ab 495.000 €",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Wohnung A2",
    type: "3-Zimmer",
    size: 92,
    floor: "1. Obergeschoss",
    rooms: 3,
    features: ["Balkon", "Parkettboden", "Fußbodenheizung"],
    status: "available" as const,
    price: "ab 685.000 €",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Wohnung B1",
    type: "3-Zimmer",
    size: 98,
    floor: "2. Obergeschoss",
    rooms: 3,
    features: ["Loggia", "2 Bäder", "Abstellraum"],
    status: "reserved" as const,
    price: "ab 745.000 €",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Wohnung C1",
    type: "4-Zimmer",
    size: 128,
    floor: "2. Obergeschoss",
    rooms: 4,
    features: ["Süd-Balkon", "Master-Suite", "Gäste-WC"],
    status: "available" as const,
    price: "ab 965.000 €",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Penthouse P1",
    type: "5-Zimmer",
    size: 180,
    floor: "Dachgeschoss",
    rooms: 5,
    features: ["Dachterrasse", "Kamin", "Panoramablick"],
    status: "available" as const,
    price: "ab 1.850.000 €",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Wohnung D1",
    type: "4-Zimmer",
    size: 135,
    floor: "1. Obergeschoss",
    rooms: 4,
    features: ["Westbalkon", "Ankleide", "Smart Home"],
    status: "sold" as const,
    price: "Verkauft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const ApartmentsSection = ({ apartments }: ApartmentsSectionProps) => {
  // Adapter: Convert RealEstateObject to ApartmentCard format
  const adaptedApartments = apartments.length > 0 
    ? apartments.map((apt) => ({
        id: parseInt(apt.id) || 0,
        name: apt.title,
        type: `${apt.rooms}-Zimmer`,
        size: apt.size,
        floor: apt.floor || 'N/A',
        rooms: apt.rooms,
        features: apt.features || [],
        status: apt.status || 'available' as const,
        price: apt.price ? `ab ${apt.price.toLocaleString('de-DE')} €` : 'Preis auf Anfrage',
        image: apt.images[0] || 'https://images.unsplash.com/photo-1502672260066-6bc232f9ed10',
      }))
    : localApartments;
  
  return (
    <section id="apartments" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground">
            Wohnungen
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
            Ihr neues Zuhause
          </h2>
          <p className="font-body text-muted-foreground mt-6 leading-relaxed">
            Entdecken Sie unsere Auswahl an exklusiven Eigentumswohnungen. 
            Jede Einheit bietet durchdachte Grundrisse und hochwertige Ausstattung.
          </p>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {adaptedApartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentsSection;
