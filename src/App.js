import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import QualityEducationTeam from './components/Team';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
         <Hero />
         <Packages />
         <QualityEducationTeam />
         <ContactSection />
         <Footer />
    </div>
  );
}

export default App;
