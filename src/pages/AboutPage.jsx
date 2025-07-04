import React from 'react';
import About from '../components/About';
import { useEffect } from 'react';

const AboutPage = () => {
      useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-background">
      <div>
        <About />
      </div>
    </div>
  );
};

export default AboutPage;