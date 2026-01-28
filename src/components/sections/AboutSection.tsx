import type { Project } from "@/types";

interface AboutSectionProps {
  project: Project;
}

const AboutSection = ({ project }: AboutSectionProps) => {
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
                Wohnen zwischen <br />
                <span className="italic">Garten und Geschichte</span>
              </h2>
            </div>

            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                Die Gartenresidenz am Denkmal vereint historische Substanz mit moderner Wohnqualität. 
                Acht Eigentumswohnungen mit großzügigen Grundrissen öffnen sich zu Gärten und Terrassen.
              </p>
              <p>
                Innen sorgen helle Räume, bodentiefe Fenster und hochwertige Materialien für eine ruhige, 
                zeitlose Atmosphäre. Außen rahmen viel Grün und die Nähe zum Rhein das Ensemble.
              </p>
              <p>
                Ob Gartenwohnung oder Maisonette: Jede Einheit ist so geplant, dass sie Alltagstauglichkeit 
                und Komfort verbindet – mit klarer Materialität und flexiblen Grundrissen.
              </p>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="font-display text-4xl text-primary">{project.objectCount}</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Wohneinheiten</p>
              </div>
              <div>
                <span className="font-display text-4xl text-primary">93–183</span>
                <p className="font-body text-sm text-muted-foreground mt-1">m² Wohnfläche</p>
              </div>
              <div>
                <span className="font-display text-4xl text-primary">Rhein</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Lage Meerbusch</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/assets/units/we1-1.jpg"
                alt="Innenraum Gartenresidenz am Denkmal"
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
