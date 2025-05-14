
import React from 'react';
import { GraduationCap, Code, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container bg-gray-900">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              I'm a Computer Science Engineering graduate with a passion for creating efficient software solutions. My journey in the world of programming started during my undergraduate studies, where I developed a strong foundation in various programming languages and software development methodologies.
            </p>
            
            <p className="text-lg">
              With hands-on experience in algorithm analysis, coding, and creating real-world applications, I enjoy tackling complex problems and turning them into elegant solutions. My academic background has equipped me with a solid understanding of computer science fundamentals, while my personal projects have given me practical experience in implementing those concepts.
            </p>

            <p className="text-lg">
              I'm particularly interested in Python development, software testing, and web development. I'm constantly learning and exploring new technologies to expand my skill set and stay updated with industry trends.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
            <div className="bg-white/5 p-4 rounded-lg flex items-start gap-3">
              <div className="mt-1">
                <GraduationCap className="h-5 w-5 text-portfolio-teal" />
              </div>
              <div>
                <h4 className="font-medium text-white">Bachelor of Technology in Computer Science Engineering</h4>
                <p className="text-gray-400">University Name • Graduated Year</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-portfolio-teal" />
            Current Focus
          </h3>
          
          <div className="space-y-4">
            <p className="text-gray-300">
              I am actively seeking full-time opportunities or internships in:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-portfolio-teal/20 p-2 rounded-full">
                  <Code className="h-4 w-4 text-portfolio-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Python Development</h4>
                  <p className="text-sm text-gray-400">Building robust applications and scripts using Python</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-portfolio-teal/20 p-2 rounded-full">
                  <Search className="h-4 w-4 text-portfolio-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Software Testing</h4>
                  <p className="text-sm text-gray-400">Manual and automated testing to ensure software quality</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-portfolio-teal/20 p-2 rounded-full">
                  <Layout className="h-4 w-4 text-portfolio-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Web Development</h4>
                  <p className="text-sm text-gray-400">Creating responsive and user-friendly web applications</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
