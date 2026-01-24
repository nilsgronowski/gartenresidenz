import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToApartments = () => {
    const element = document.getElementById("apartments");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Location Tag */}
          <div className="inline-block">
            <span className="text-sm font-body uppercase tracking-[0.3em] text-primary-foreground/80 bg-primary/80 px-6 py-2 rounded-full">
              München · Bogenhausen
            </span>
          </div>

          {/* Project Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-medium leading-tight">
            Residenz am<br />
            <span className="italic">Parkblick</span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Exklusives Wohnen in einer der begehrtesten Lagen Münchens. 
            12 Eigentumswohnungen verbinden zeitlose Architektur mit höchstem Wohnkomfort.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-body tracking-wide"
            >
              Exposé anfordern
            </Button>
            <Button 
              onClick={scrollToApartments}
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-body tracking-wide"
            >
              Wohnungen entdecken
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;
