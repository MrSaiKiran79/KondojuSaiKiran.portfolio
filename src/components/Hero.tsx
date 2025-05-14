
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-900 to-portfolio-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="px-3 py-1 text-sm bg-portfolio-blue/10 text-portfolio-blue rounded-full mb-6 inline-block">
                Computer Science Engineer | Python Developer | Software Tester
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Kondoju Sai Kiran</span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-lg">
              Computer Science graduate specialized in cybersecurity with expertise in Python development, software testing, and web development.
              Passionate about solving complex problems and building secure systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="btn-primary group" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-portfolio-teal text-white transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
              
              <Button 
                variant="outline" 
                className="border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-portfolio-teal text-white transition-all"
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
            
            <div className="flex items-center pt-8 space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-portfolio-charcoal bg-gray-${i*100 + 400}`} />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-medium text-white">10+ Projects</span> completed
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:flex justify-center relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-portfolio-teal/5 rounded-full backdrop-blur-xl"></div>
              <div className="absolute bottom-8 -right-8 w-24 h-24 bg-portfolio-blue/10 rounded-full backdrop-blur-xl"></div>
              
              {/* Main profile image container */}
              <div className="relative z-10 w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-1.5">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-portfolio-blue/30 to-portfolio-teal/30 p-1 backdrop-blur-xl overflow-hidden">
                  {/* Profile image */}
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/Hsx1RfcJ/Sai-Kiran-modified.jpg" 
                      alt="Kondoju Sai Kiran" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Tech stack floating items */}
              <div className="absolute top-10 -right-8 p-2 bg-gray-800/40 backdrop-blur-xl rounded-lg border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gray-700/60 flex items-center justify-center">
                  <span className="text-blue-400 text-lg font-bold">Py</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 -left-8 p-2 bg-gray-800/40 backdrop-blur-xl rounded-lg border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gray-700/60 flex items-center justify-center">
                  <span className="text-yellow-400 text-lg font-bold">JS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
