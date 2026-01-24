const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl text-white mb-4">
              Residenz am Parkblick
            </h3>
            <p className="font-body text-white/60 leading-relaxed max-w-md">
              Exklusives Wohnen in München-Bogenhausen. 
              12 hochwertige Eigentumswohnungen in bester Lage.
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
              <p>Mustermann Immobilien GmbH</p>
              <p>Ismaninger Straße 140</p>
              <p>81675 München</p>
              <p className="pt-2">+49 89 123 456 78</p>
              <p>info@residenz-parkblick.de</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-white/40">
              © {currentYear} Residenz am Parkblick. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 font-body text-sm">
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
                Impressum
              </a>
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
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
