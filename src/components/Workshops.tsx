
import React from 'react';
import { GraduationCap, Flag, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface WorkshopProps {
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  tools: string[];
}

const workshopData: WorkshopProps[] = [
  {
    title: "Ethical Hacking & Vulnerability Assessment",
    organization: "Cyber Security Club, Sphoorthy Engineering College",
    description: "Participated in hands-on workshop focused on identifying security vulnerabilities and ethical hacking techniques.",
    achievements: [
      "Identified 4 out of 5 security flags in the workshop challenges",
      "Successfully detected XSS vulnerabilities in sample applications",
      "Identified phishing attack vectors in simulated environments",
      "Uncovered SQL injection vulnerabilities in test databases",
      "Detected payload-based exploits in network traffic"
    ],
    tools: ["Nmap", "Wireshark", "Burp Suite"]
  },
  {
    title: "Digital Forensics Workshop",
    organization: "Cyber Security Club, Sphoorthy Engineering College",
    description: "Learned about digital evidence collection, preservation, and analysis techniques.",
    achievements: [
      "Practiced data recovery techniques from damaged storage media",
      "Analyzed network traffic to identify suspicious patterns",
      "Performed basic memory forensics to detect malware presence"
    ],
    tools: ["Autopsy", "Volatility", "NetworkMiner"]
  }
];

const ResponsibilityCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-white/10"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 bg-portfolio-blue/20 rounded-full">
          <Shield className="h-6 w-6 text-portfolio-blue" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Cyber Security Club Member</h3>
          <p className="text-gray-400">Sphoorthy Engineering College</p>
        </div>
      </div>
      
      <div className="space-y-3 text-gray-300">
        <p>
          Actively participated in campus-led cybersecurity initiatives and events, contributing to the security awareness of the college community.
        </p>
        <p>
          Supported peers in identifying vulnerabilities during simulated exercises and ethical hacking challenges, enhancing the practical learning environment.
        </p>
      </div>
    </motion.div>
  );
};

const WorkshopCard: React.FC<WorkshopProps> = ({ 
  title, 
  organization,
  description,
  achievements,
  tools
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-portfolio-teal/20 rounded-full">
          <GraduationCap className="h-6 w-6 text-portfolio-teal" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{organization}</p>
        </div>
      </div>
      
      <p className="mt-3 text-gray-300">{description}</p>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-white mb-3">Achievements:</h4>
        <ul className="space-y-2">
          {achievements.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <Flag className="h-4 w-4 text-portfolio-teal mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-400 mb-2">Tools Used:</h4>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span key={index} className="px-2 py-1 bg-portfolio-teal/10 text-portfolio-teal text-xs rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="section-container bg-gray-900/50">
      <h2 className="section-title">
        <span className="gradient-text">Workshops</span> & Responsibilities
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-8">
            {workshopData.map((workshop, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <WorkshopCard {...workshop} />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <ResponsibilityCard />
        </div>
      </div>
    </section>
  );
};

export default Workshops;
