import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import AboutSection from "@/components/sections/AboutSection";
import LocationSection from "@/components/sections/LocationSection";
import ApartmentsSection from "@/components/sections/ApartmentsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import { project, realEstateObjects, company } from "@/data/projectData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection project={project} />
        <HighlightsSection />
        <AboutSection project={project} />
        <LocationSection location={project.location} />
        <ApartmentsSection apartments={realEstateObjects} />
        <GallerySection />
        <ContactSection company={company} />
      </main>
      <FooterSection company={company} />
    </div>
  );
};

export default Index;
