
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Shield, FileQuestion } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  techStack: string[];
  icon: React.ReactNode;
  features: string[];
}

const projectsData: ProjectProps[] = [
  {
    title: "Phishing Link Detection",
    description: "A machine learning solution that analyzes URLs to identify potential phishing attempts. The system extracts various features from URLs and applies classification algorithms to detect malicious links.",
    image: "",
    demoUrl: "#",
    githubUrl: "#",
    techStack: ["Python", "Machine Learning", "Data Analysis", "Cybersecurity"],
    features: [
      "Domain analysis and verification",
      "Special character detection",
      "URL length assessment",
      "Domain age comparison",
      "Improved user security against online threats"
    ],
    icon: <Shield size={48} className="text-portfolio-blue" />
  },
  {
    title: "Online Quiz Platform",
    description: "A responsive web application that allows users to create, share, and participate in quizzes on various topics. Features include timed quizzes, instant feedback, and a leaderboard system.",
    image: "",
    demoUrl: "#",
    githubUrl: "#",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Multiple choice question support",
      "Real-time feedback system",
      "Score tracking and analytics",
      "Cross-browser compatibility",
      "Intuitive interface for quiz creators and takers"
    ],
    icon: <FileQuestion size={48} className="text-portfolio-teal" />
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  demoUrl, 
  githubUrl, 
  techStack,
  features,
  icon 
}) => {
  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="h-48 bg-gray-800/50 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center">
            {icon}
            <span className="mt-2 text-gray-300">Project Preview</span>
          </div>
        )}
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-portfolio-teal/10 text-portfolio-teal">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild className="flex-1 border-gray-700 hover:border-portfolio-teal">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1 border-gray-700 hover:border-portfolio-teal">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-1" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        My <span className="gradient-text">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
