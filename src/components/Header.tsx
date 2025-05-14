
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">Home</a>
          <a href="#projects" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">Contact</a>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-gray-700">Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
