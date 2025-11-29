
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Programs from './components/Programs';
import AdmissionsProcess from './components/AdmissionsProcess';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Programs />
        <AdmissionsProcess />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
