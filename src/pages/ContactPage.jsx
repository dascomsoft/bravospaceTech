

import React from 'react';
import Contact from '../components/Contact';
import { useEffect } from 'react';

const ContactPage = () => {
      useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-background">
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;