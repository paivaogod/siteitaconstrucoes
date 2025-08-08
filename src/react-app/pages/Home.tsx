import Header from '@/react-app/components/Header';
import HeroSection from '@/react-app/components/HeroSection';
import AboutSection from '@/react-app/components/AboutSection';
import ServicesSection from '@/react-app/components/ServicesSection';
import PortfolioSection from '@/react-app/components/PortfolioSection';
import TestimonialsSection from '@/react-app/components/TestimonialsSection';

import ContactSection from '@/react-app/components/ContactSection';
import Footer from '@/react-app/components/Footer';
import FloatingWhatsApp from '@/react-app/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
