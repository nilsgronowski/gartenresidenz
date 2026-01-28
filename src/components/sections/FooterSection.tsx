import type { Company } from "@/types";

interface FooterSectionProps {
  company: Company;
}

const FooterSection = ({ company }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl text-white mb-4">
              Gartenresidenz am Denkmal
            </h3>
            <p className="font-body text-white/60 leading-relaxed max-w-md">
              Acht Eigentumswohnungen in Rheinlage Meerbusch – Wohnen zwischen Garten und Geschichte.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-white mb-4">Navigation</h4>
            <ul className="space-y-3 font-body">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Das Projekt
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Lage
                </a>
              </li>
              <li>
                <a href="#apartments" className="hover:text-white transition-colors">
                  Wohnungen
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-white mb-4">Kontakt</h4>
            <div className="space-y-3 font-body">
              <p>Gartenresidenz am Denkmal</p>
              <p>Düsseldorfer Str. 33</p>
              <p>40667 Meerbusch</p>
              <p className="pt-2">+49 (0) 2132 13 69 0</p>
              <a
                    href="mailto:lars.gronowski@fohrer-immobilien.de"
                    className="font-body text-muted-foreground mt-1 inline-block hover:text-primary transition-colors"
                  >
                    info@fohrer-immobilien.de
                  </a>
                  <br></br>
                  <a
                    href="mailto:lars.gronowski@fohrer-immobilien.de"
                    className="font-body text-muted-foreground mt-1 inline-block hover:text-primary transition-colors"
                  >
                    lars.gronowski@fohrer-immobilien.de
                  </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-white/40">
              © {currentYear} Fohrer Select Immobilien GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 font-body text-sm">
              <a href="/impressum" className="text-white/40 hover:text-white/60 transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="text-white/40 hover:text-white/60 transition-colors">
                Datenschutz
              </a>
              <a href="/agb" className="text-white/40 hover:text-white/60 transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
