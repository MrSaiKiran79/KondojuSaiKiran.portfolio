
import React from 'react';
import { Code, Database, Layout, FileCode, Terminal, Server } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategoryProps[] = [
  {
    title: "Frontend",
    icon: <Layout className="h-8 w-8 text-portfolio-purple" />,
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS", "Material UI"]
  },
  {
    title: "Backend",
    icon: <Server className="h-8 w-8 text-portfolio-purple" />,
    skills: ["Node.js", "Express", "NestJS", "Django", "Flask", "Spring Boot", "GraphQL"]
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-portfolio-purple" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Supabase", "Prisma"]
  },
  {
    title: "DevOps",
    icon: <Terminal className="h-8 w-8 text-portfolio-purple" />,
    skills: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Netlify", "Vercel", "GitHub Actions"]
  },
  {
    title: "Tools",
    icon: <FileCode className="h-8 w-8 text-portfolio-purple" />,
    skills: ["VS Code", "Figma", "Postman", "Jest", "Cypress", "Webpack", "NPM/Yarn"]
  },
  {
    title: "Methodologies",
    icon: <Code className="h-8 w-8 text-portfolio-purple" />,
    skills: ["Agile/Scrum", "TDD", "REST API Design", "Microservices", "Responsive Design", "Accessibility"]
  }
];

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-portfolio-purple"></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container bg-gray-50">
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
