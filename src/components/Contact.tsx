
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container bg-gray-900/30">
      <h2 className="section-title">
        Get in <span className="gradient-text">Touch</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect!</h3>
          <p className="text-gray-300 mb-8 text-lg">
            I'm interested in freelance opportunities, full-time positions, and internships. Feel free to reach out through the form or any of the channels below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-portfolio-teal/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-portfolio-teal" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-300">saikirankondoju0620@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-portfolio-teal/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-portfolio-teal" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-300">+91 7981544362</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-portfolio-teal/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-portfolio-teal" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-gray-300">Hyderabad, India</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-white mb-3">Connect on</h4>
              <div className="flex gap-4">
                <a href="https://github.com/mrsaikiran79" target="_blank" rel="noopener noreferrer" 
                   className="bg-portfolio-teal/20 p-3 rounded-full hover:bg-portfolio-teal/30 transition-colors">
                  <Github className="h-6 w-6 text-portfolio-teal" />
                </a>
                <a href="https://www.linkedin.com/in/kondoju-sai-kiran/" target="_blank" rel="noopener noreferrer"
                   className="bg-portfolio-teal/20 p-3 rounded-full hover:bg-portfolio-teal/30 transition-colors">
                  <Linkedin className="h-6 w-6 text-portfolio-teal" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg p-8 animate-fade-in">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="input-field min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
