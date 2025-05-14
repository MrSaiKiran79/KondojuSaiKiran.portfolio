
import React from 'react';
import { Briefcase, Calendar, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface InternshipProps {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const internshipData: InternshipProps[] = [
  {
    title: "Operations Associate Intern",
    company: "NNIIT Edutech",
    period: "Mar 2024 – May 2024",
    description: "Worked in operations team handling daily operational activities and customer support.",
    responsibilities: [
      "Maintained Excel reports and documentation for operational activities",
      "Resolved customer queries and ensured smooth operations",
      "Developed communication skills by interacting with students and parents",
      "Handled L1-level support tasks and documented recurring issues",
      "Proposed improvements based on operational observations",
      "Participated in reviews and stand-up meetings"
    ]
  }
];

const InternshipCard: React.FC<InternshipProps> = ({ 
  title, 
  company, 
  period, 
  description,
  responsibilities 
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-white/10">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-portfolio-blue/20 rounded-full">
          <Briefcase className="h-6 w-6 text-portfolio-blue" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{company}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center text-gray-400 text-sm">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{period}</span>
      </div>
      
      <p className="mt-4 text-gray-300">{description}</p>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-white mb-3">Key Responsibilities:</h4>
        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <Check className="h-4 w-4 text-portfolio-emerald mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Internship: React.FC = () => {
  return (
    <section id="internship" className="section-container">
      <h2 className="section-title">
        <span className="gradient-text">Internship</span> Experience
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {internshipData.map((internship, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <InternshipCard {...internship} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
