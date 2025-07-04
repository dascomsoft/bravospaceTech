import Services from '../components/Services';
import ServiceQuotes from '../components/SerciceQuotes';
import React from 'react';
import { useEffect } from 'react';




const ServicesPage = () => {
      useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-background">
    
      <div>
        <Services />
        <ServiceQuotes />
      </div>
    
    </div>
  );
};

export default ServicesPage;