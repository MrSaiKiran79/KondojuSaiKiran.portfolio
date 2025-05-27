
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDownloadResume = () => {
    // You can replace this URL with your actual resume URL
    const resumeUrl = '/path-to-your-resume.pdf'; // Replace with actual path
    
    // For now, show an alert with instructions
    alert(`To add your resume:
1. Upload your PDF resume to the 'public' folder
2. Name it something like 'Kondoju_Sai_Kiran_Resume.pdf'
3. Replace '/path-to-your-resume.pdf' with '/Kondoju_Sai_Kiran_Resume.pdf' in the code
4. The download will work automatically`);
    
    // Uncomment these lines once you've added your resume
    // const link = document.createElement('a');
    // link.href = resumeUrl;
    // link.download = 'Kondoju_Sai_Kiran_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
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

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo with Profile Image */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-teal-500">
            <img 
              src="/lovable-uploads/1c75495b-f8e9-4341-8cfa-eafc3d973a91.png" 
              alt="Kondoju Sai Kiran"
              className="w-full h-full object-cover"
            />
          </div>
          <a 
            href="#home" 
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            Sai Kiran
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-gray-300 hover:text-teal-400 font-medium transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <button 
            onClick={handleDownloadResume}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
          >
            <Download size={16} />
            Resume
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="bg-gray-900/98 backdrop-blur-md border-t border-gray-700">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-300 hover:text-teal-400 hover:bg-gray-800/50 font-medium transition-all px-6 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 py-3">
              <button 
                onClick={handleDownloadResume}
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 w-full justify-center"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
