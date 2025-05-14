
import React from 'react';
import { 
  Code, 
  Database, 
  Layout, 
  Terminal, 
  Search, 
  BrainCircuit, 
  Shield,
  Server,
  Languages,
  HeartHandshake
} from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategoryProps[] = [
  {
    title: "Programming Languages",
    icon: <Code className="h-8 w-8 text-portfolio-teal" />,
    skills: ["Python", "JavaScript", "HTML", "CSS", "SQL"]
  },
  {
    title: "Web Development",
    icon: <Layout className="h-8 w-8 text-portfolio-teal" />,
    skills: ["HTML/CSS", "JavaScript", "ReactJS", "Responsive Design"]
  },
  {
    title: "Testing",
    icon: <Search className="h-8 w-8 text-portfolio-teal" />,
    skills: ["Manual Testing", "Automation Testing", "Selenium", "Test Case Design", "Regression Testing"]
  },
  {
    title: "Tools & Environment",
    icon: <Terminal className="h-8 w-8 text-portfolio-teal" />,
    skills: ["Git", "GitHub", "VS Code", "Windows", "Linux"]
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-portfolio-teal" />,
    skills: ["SQL", "Database Design"]
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="h-8 w-8 text-portfolio-teal" />,
    skills: ["Ethical Hacking", "Vulnerability Assessment", "Penetration Testing", "Computer Networks", "Wireshark", "Nmap", "Burp Suite"]
  },
  {
    title: "Problem Solving",
    icon: <BrainCircuit className="h-8 w-8 text-portfolio-teal" />,
    skills: ["Data Structures", "Algorithms", "Analytical Thinking", "Debugging"]
  },
  {
    title: "Soft Skills",
    icon: <HeartHandshake className="h-8 w-8 text-portfolio-teal" />,
    skills: ["Self-learning", "Presentation", "Adaptability", "Team Collaboration", "Communication"]
  }
];

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-white/10">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal"></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container bg-gray-900/50">
      <h2 className="section-title">
        My <span className="gradient-text">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <SkillCategory {...category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
