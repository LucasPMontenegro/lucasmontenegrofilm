"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("Navigation: Component mounted");
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        console.log("Navigation: Active section changed to:", currentSection);
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    console.log("Navigation: Scrolling to section:", href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : ''
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            LM
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'text-portfolio-blue'
                    : 'text-gray-600 dark:text-gray-300 hover:text-portfolio-blue'
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-portfolio-blue"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              className="p-2 rounded-md text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="w-full h-0.5 bg-current mb-1"></span>
                <span className="w-full h-0.5 bg-current mb-1"></span>
                <span className="w-full h-0.5 bg-current"></span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}