import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/types";

interface HeroSectionProps {
  project: Project;
}

const HeroSection = ({ project }: HeroSectionProps) => {
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
          backgroundImage: "url('/assets/units/we7-1.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/55 to-background/92" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Location Tag */}
          <div className="inline-block">
            <span className="text-sm font-body uppercase tracking-[0.3em] text-primary-foreground/80 bg-primary/80 px-6 py-2 rounded-full">
              {project.location}
            </span>
          </div>

          {/* Project Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight drop-shadow-md">
            {project.name}
          </h1>

          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Wohnen zwischen Garten und Geschichte. <br /> {project.objectCount} Eigentumswohnungen in Rheinlage von Meerbusch.
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
              className="border-transparent text-[#8a5a2e] bg-[#f2e6d8]/90 hover:bg-[#e9dccd] px-8 py-6 text-base font-body tracking-wide shadow-sm"
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
