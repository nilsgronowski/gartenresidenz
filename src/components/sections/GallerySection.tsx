import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "/assets/units/we7-1.jpeg",
    alt: "Außenansicht Gartenresidenz am Denkmal",
    caption: "Außenvisualisierung Rheinlage",
  },
  {
    src: "/assets/units/we1-1.jpg",
    alt: "Wohnbereich WE 01",
    caption: "Wohnbereich mit Gartenbezug",
  },
  {
    src: "/assets/units/we1-2.png",
    alt: "Detail Innenraum WE 01",
    caption: "Helle Materialien und klare Linien",
  },
  {
    src: "/assets/units/we2-1.png",
    alt: "Wohnküche WE 02",
    caption: "Offene Wohnküche mit viel Licht",
  },
  {
    src: "/assets/units/we4-1.png",
    alt: "Wohnzimmer WE 04",
    caption: "Großzügiger Wohn-/Essbereich",
  },
  {
    src: "/assets/units/we6-1.png",
    alt: "Innenraum WE 06",
    caption: "Bodentiefe Fenster und Grünblick",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground">
            Impressionen
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
            Einblicke
          </h2>
          <p className="font-body text-muted-foreground mt-6 leading-relaxed">
            Entdecken Sie die Qualität und Atmosphäre unserer Residenz 
            in ausgewählten Impressionen.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display text-xl text-white">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-full p-0 bg-charcoal border-none">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                <p className="font-display text-2xl text-white text-center">
                  {galleryImages[selectedImage].caption}
                </p>
                <p className="font-body text-sm text-white/70 text-center mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
