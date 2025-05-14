
import React from 'react';
import { GraduationCap, Code, Lightbulb, Search, Layout } from 'lucide-react';

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
              I'm a Computer Science Engineering graduate with a specialization in cybersecurity from Jawaharlal Nehru Technological University Hyderabad (2020-2024). My journey in programming and cybersecurity has equipped me with hands-on experience in Python, networking, and web development.
            </p>
            
            <p className="text-lg">
              With a strong foundation in algorithm analysis, coding, and creating real-world applications, I enjoy tackling complex problems and turning them into elegant solutions. My academic background has equipped me with a solid understanding of computer science fundamentals and cybersecurity principles.
            </p>

            <p className="text-lg">
              I'm particularly interested in Python development, software testing, and web development. I'm constantly learning and exploring new technologies to expand my skill set and stay updated with industry trends.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg flex items-start gap-3">
                <div className="mt-1">
                  <GraduationCap className="h-5 w-5 text-portfolio-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-white">B.Tech in Computer Science Engineering - Cybersecurity</h4>
                  <p className="text-gray-400">Sphoorthy Engineering College, JNTU Hyderabad • 2020-2024</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex items-start gap-3">
                <div className="mt-1">
                  <GraduationCap className="h-5 w-5 text-portfolio-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Intermediate (MPC)</h4>
                  <p className="text-gray-400">Narayana Junior College • 2019-2020</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex items-start gap-3">
                <div className="mt-1">
                  <GraduationCap className="h-5 w-5 text-portfolio-teal" />
                </div>
                <div>
                  <h4 className="font-medium text-white">SSC</h4>
                  <p className="text-gray-400">Siddhartha Grammar High School • 2017-2018</p>
                </div>
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
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-300 italic">Ready to relocate and work in any shift</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
