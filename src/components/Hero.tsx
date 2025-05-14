
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-portfolio-lavender/20 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">John Doe</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              Full-stack Developer
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              I build accessible, responsive web applications with modern technologies.
              Passionate about creating intuitive user experiences and solving complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-gray-300 hover:border-portfolio-purple">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="border-gray-300 hover:border-portfolio-purple">
                <ExternalLink className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-portfolio-purple/10 flex items-center justify-center overflow-hidden">
                {/* Profile image would go here */}
                <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Profile Image</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-portfolio-purple rounded-xl rotate-12 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-portfolio-lightPurple rounded-lg -rotate-12 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
