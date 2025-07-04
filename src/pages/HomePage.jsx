import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import TrustSection from '../components/TrustSection';
import { useEffect } from 'react';

const Index = () => {
      useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <TrustSection />
    </div>
  );
};

export default Index;
