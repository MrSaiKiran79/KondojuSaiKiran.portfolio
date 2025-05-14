
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-900 to-portfolio-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Kondoju Sai Kiran</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
              Software Developer | QA Engineer
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Computer Science graduate with expertise in Python development, software testing, and web development.
              Passionate about solving complex problems with clean, efficient code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button variant="outline" className="border-gray-600 hover:border-portfolio-teal">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="border-gray-600 hover:border-portfolio-teal">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-portfolio-teal/10 flex items-center justify-center overflow-hidden">
                {/* Profile image placeholder - replace with actual image when available */}
                <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400 text-xl">Kondoju Sai Kiran</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-portfolio-teal rounded-xl rotate-12 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-portfolio-blue rounded-lg -rotate-12 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
