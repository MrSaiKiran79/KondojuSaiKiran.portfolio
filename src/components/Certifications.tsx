
import React from 'react';
import { Award, Calendar, Building } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertificationProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
}

const certificationData: CertificationProps[] = [
  {
    title: "Full Stack Development",
    organization: "Excler Institution",
    period: "Oct 2023 – Feb 2024",
    description: "Comprehensive training in full stack web development technologies and testing methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Testing Fundamentals", "Selenium Automation"]
  }
];

const CertificationCard: React.FC<CertificationProps> = ({ 
  title, 
  organization, 
  period, 
  description,
  skills 
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-white/10">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-portfolio-teal/20 rounded-full">
          <Award className="h-6 w-6 text-portfolio-teal" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{organization}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center text-gray-400 text-sm">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{period}</span>
      </div>
      
      <p className="mt-4 text-gray-300">{description}</p>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-400 mb-2">Skills Acquired:</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-portfolio-teal/10 text-portfolio-teal text-xs rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-container bg-gray-900">
      <h2 className="section-title">
        <span className="gradient-text">Certifications</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationData.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CertificationCard {...cert} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
