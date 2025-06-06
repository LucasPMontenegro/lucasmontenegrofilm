"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("ContactSection: In view status:", inView);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`ContactSection: Form field ${name} updated:`, value);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ContactSection: Form submitted with data:", formData);
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("ContactSection: Form submission completed");
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "lucas@example.com",
      href: "mailto:lucas@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? I'd love to collaborate on your next 
            photography or film project. Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="flex items-center p-4 glass-effect rounded-xl hover:shadow-md transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-portfolio-blue/20 transition-colors">
                    <info.icon className="w-6 h-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.title}</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="p-6 glass-effect rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Quick Response
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                I typically respond to messages within 24 hours. 
                For urgent projects, don't hesitate to call directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg border-0 focus:ring-2 focus:ring-portfolio-blue transition-all duration-300"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg border-0 focus:ring-2 focus:ring-portfolio-blue transition-all duration-300"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-effect rounded-lg border-0 focus:ring-2 focus:ring-portfolio-blue transition-all duration-300 resize-none"
                  placeholder="Tell me about your creative vision..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-blue hover:bg-portfolio-blue/90 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 glow-effect"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}