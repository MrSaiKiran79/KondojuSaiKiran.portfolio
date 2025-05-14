
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  techStack: string[];
}

const projectsData: ProjectProps[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product listings, shopping cart, and payment integration using Stripe.",
    image: "",
    demoUrl: "#",
    githubUrl: "#",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"]
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media platforms with data visualization and reporting features.",
    image: "",
    demoUrl: "#",
    githubUrl: "#",
    techStack: ["Vue.js", "Tailwind CSS", "Firebase", "Chart.js", "REST API"]
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag and drop functionality and team collaboration features.",
    image: "",
    demoUrl: "#",
    githubUrl: "#",
    techStack: ["TypeScript", "React", "Redux", "Node.js", "PostgreSQL"]
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  demoUrl, 
  githubUrl, 
  techStack 
}) => {
  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Code size={48} className="text-gray-400" />
        )}
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-portfolio-lavender text-portfolio-purple">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
