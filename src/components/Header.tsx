import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-teal-500">
            <img 
              src="/lovable-uploads/1c75495b-f8e9-4341-8cfa-eafc3d973a91.png" 
              alt="Sai Kiran"
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Sai Kiran
          </button>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-gray-300 hover:text-teal-400 font-medium transition-colors relative group",
                activeSection === item.id && "text-teal-400"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full",
                activeSection === item.id && "w-full"
              )}></span>
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <a 
            href="/Kiran_2024.pdf"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
        
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn(
        'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="bg-gray-900/98 backdrop-blur-md border-t border-gray-700">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-gray-300 hover:text-teal-400 hover:bg-gray-800/50 font-medium transition-all px-6 py-3 text-left",
                  activeSection === item.id && "text-teal-400 bg-gray-800/30"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 py-3">
              <a 
                href="/Kiran_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 w-full justify-center"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;