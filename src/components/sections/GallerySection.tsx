import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  // Außenvisualisierungen
  {
    src: "/assets/gallery/01.2 Außenvisualisierung Banner ohne Nachbarhaus.jpg",
    alt: "Außenansicht Banner",
    caption: "Außenvisualisierung Rheinlage",
  },
  {
    src: "/assets/gallery/02 Außenvisualisierung.jpg",
    alt: "Außenvisualisierung 2",
    caption: "Straßenansicht",
  },
  {
    src: "/assets/gallery/03 Außenvisualisierung.jpg",
    alt: "Außenvisualisierung 3",
    caption: "Gartenperspektive",
  },
  {
    src: "/assets/gallery/04 Außenvisualisierung.jpg",
    alt: "Außenvisualisierung 4",
    caption: "Gesamtansicht",
  },
  // Innenvisualisierungen
  {
    src: "/assets/gallery/04 Whg 01 DUNKEL.jpg",
    alt: "Wohnung 1 Wohnbereich",
    caption: "WE 01 Wohnbereich",
  },
  {
    src: "/assets/gallery/01 Whg 2.jpg",
    alt: "Wohnung 2 Wohnbereich",
    caption: "WE 02 Wohnbereich",
  },
  {
    src: "/assets/gallery/02 Whg 2.jpg",
    alt: "Wohnung 2 Wohnbereich",
    caption: "WE 02 Wohnbereich",
  },
  {
    src: "/assets/gallery/03 Whg 3.jpg",
    alt: "Wohnung 3 - Wohnbereich",
    caption: "WE 03 · 1. OG",
  },
  {
    src: "/assets/gallery/04 Whg 4.jpg",
    alt: "Wohnung 4 - Wohnzimmer",
    caption: "WE 04 · Großzügiger Wohnbereich",
  },
  {
    src: "/assets/gallery/05 Whg 4.jpg",
    alt: "Wohnung 4 - Schlafzimmer",
    caption: "WE 04 · Schlafzimmer",
  },
  {
    src: "/assets/gallery/06 Whg 4.jpg",
    alt: "Wohnung 4 - Badezimmer",
    caption: "WE 04 · Badezimmer",
  },
  {
    src: "/assets/gallery/07 Whg 6.jpg",
    alt: "Wohnung 6 - Maisonette",
    caption: "WE 06 · Maisonette Wohnbereich",
  },
  {
    src: "/assets/gallery/08 Whg 6.jpg",
    alt: "Wohnung 6 - Schlafzimmer",
    caption: "WE 06 · Schlafzimmer",
  },
  {
    src: "/assets/gallery/09 Whg 6.jpg",
    alt: "Wohnung 6 - Badezimmer",
    caption: "WE 06 · Badezimmer",
  },
  {
    src: "/assets/gallery/10 Whg 6.jpg",
    alt: "Wohnung 6 - Dachgeschoss",
    caption: "WE 06 · Dachgeschoss",
  },
  {
    src: "/assets/gallery/11 Whg 6.jpg",
    alt: "Wohnung 6 - Badezimmer",
    caption: "WE 06 · Badezimmer",
  },
  {
    src: "/assets/gallery/12 Whg 1 Denkmalschutz.jpg",
    alt: "Wohnung 1 Denkmal - Wohnbereich",
    caption: "WE 07 · Denkmal Wohnbereich",
  },
  {
    src: "/assets/gallery/13 Whg 1 Denkmalschutz.jpg",
    alt: "Wohnung 1 Denkmal - Wohnbereich",
    caption: "WE 07 · Wohnbereich",
  },
  {
    src: "/assets/gallery/14 Whg 1 Denkmalschutz.jpg",
    alt: "Wohnung 1 Denkmal - Wohnbereich",
    caption: "WE 07 · Wohnbereich",
  },
  {
    src: "/assets/gallery/15 Whg 1 Denkmalschutz.jpg",
    alt: "Wohnung 1 Denkmal - Arbeitszimmer",
    caption: "WE 07 · Arbeitszimmer",
  },
  {
    src: "/assets/gallery/16 Whg 2 Denkmalschutz.jpg",
    alt: "Wohnung 2 Denkmal - Dachgeschoss",
    caption: "WE 08 · Denkmal Dachgeschoss",
  },
  {
    src: "/assets/gallery/17 Whg 2 Denkmalschutz.jpg",
    alt: "Wohnung 2 Denkmal - Küche",
    caption: "WE 08 · Küche",
  },
  {
    src: "/assets/gallery/18 Whg 2 Denkmalschutz.jpg",
    alt: "Wohnung 2 Denkmal - Wohnbereich",
    caption: "WE 08 · Wohnbereich",
  },
  {
    src: "/assets/gallery/19 Tiefgarage.jpg",
    alt: "Tiefgarage",
    caption: "Tiefgarage",
  },
  {
    src: "/assets/gallery/20 Tiefgarage.jpg",
    alt: "Tiefgarage Ansicht",
    caption: "Tiefgarage Ansicht",
  },
];

// Preview images (first 6 - best exterior and interior shots)
const previewImages = galleryImages.slice(0, 6);

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Preload all gallery images on mount
  useEffect(() => {
    galleryImages.forEach((img) => {
      const preloadImg = new window.Image();
      preloadImg.src = img.src;
    });
  }, []);

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

        {/* Gallery Grid - Preview (first 6 images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {previewImages.map((image, index) => (
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

        {/* Button to view all images in lightbox */}
        <div className="text-center mt-12">
          <button
            onClick={() => openLightbox(0)}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-body transition-colors"
          >
            Alle {galleryImages.length} Konzeptbilder ansehen
            <ChevronRight className="w-5 h-5" />
          </button>
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
