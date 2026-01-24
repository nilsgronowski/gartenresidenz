import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import AboutSection from "@/components/sections/AboutSection";
import LocationSection from "@/components/sections/LocationSection";
import ApartmentsSection from "@/components/sections/ApartmentsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <LocationSection />
        <ApartmentsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
