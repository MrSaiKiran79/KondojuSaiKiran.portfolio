
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Internship from '../components/Internship';
import Certifications from '../components/Certifications';
import Workshops from '../components/Workshops';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-portfolio-charcoal">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Internship />
      <Workshops />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
