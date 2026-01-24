import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Maximize2, BedDouble, Layers } from "lucide-react";

interface Apartment {
  id: number;
  name: string;
  type: string;
  size: number;
  floor: string;
  rooms: number;
  features: string[];
  status: "available" | "reserved" | "sold";
  price: string;
  image: string;
}

interface ApartmentCardProps {
  apartment: Apartment;
}

const statusConfig = {
  available: {
    label: "Verfügbar",
    className: "bg-green-100 text-green-800 border-green-200",
  },
  reserved: {
    label: "Reserviert",
    className: "bg-amber-100 text-amber-800 border-amber-200",
  },
  sold: {
    label: "Verkauft",
    className: "bg-muted text-muted-foreground border-border",
  },
};

const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const status = statusConfig[apartment.status];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={apartment.image}
          alt={apartment.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className={status.className}>
            {status.label}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-display text-2xl text-foreground">
              {apartment.name}
            </h3>
            <p className="font-body text-muted-foreground">{apartment.type}</p>
          </div>
          <span className="font-display text-xl text-primary font-medium">
            {apartment.price}
          </span>
        </div>

        {/* Key Details */}
        <div className="flex gap-6 py-4 border-y border-border">
          <div className="flex items-center gap-2">
            <Maximize2 className="w-4 h-4 text-muted-foreground" />
            <span className="font-body text-sm text-foreground">
              {apartment.size} m²
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-muted-foreground" />
            <span className="font-body text-sm text-foreground">
              {apartment.rooms} Zimmer
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-muted-foreground" />
            <span className="font-body text-sm text-foreground">
              {apartment.floor}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {apartment.features.map((feature, index) => (
            <span
              key={index}
              className="font-body text-xs bg-sand-light text-foreground px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        {apartment.status !== "sold" && (
          <Button
            onClick={scrollToContact}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body"
          >
            Exposé anfordern
          </Button>
        )}
        {apartment.status === "sold" && (
          <Button
            disabled
            variant="outline"
            className="w-full font-body cursor-not-allowed"
          >
            Nicht mehr verfügbar
          </Button>
        )}
      </div>
    </div>
  );
};

export default ApartmentCard;
