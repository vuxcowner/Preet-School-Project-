import { ParticleBackground } from '@/components/effects/particle-background';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { AcademicsSection } from '@/components/sections/academics';
import { FacilitiesSection } from '@/components/sections/facilities';
import { AdministrationSection } from '@/components/sections/administration';
import { AdmissionsSection } from '@/components/sections/admissions';
import { GallerySection } from '@/components/sections/gallery';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen relative" data-testid="home-page">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <FacilitiesSection />
        <AdministrationSection />
        <AdmissionsSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
