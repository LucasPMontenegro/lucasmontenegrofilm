"use client";

import { useEffect } from 'react';
import CustomCursor from '@/components/custom-cursor';
import ThemeToggle from '@/components/theme-toggle';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import MissionSection from '@/components/mission-section';
import GalleryShowcase from '@/components/gallery-showcase';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  useEffect(() => {
    console.log("Portfolio: Main page loaded with dark photography theme");
    
    // Smooth scroll behavior for all anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="relative bg-portfolio-black min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ThemeToggle />
      <Navigation />
      
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <GalleryShowcase />
      <ProjectsSection />
      <ContactSection />
      
      {/* Enhanced Footer */}
      <footer className="py-16 px-6 border-t border-portfolio-blue/20 bg-portfolio-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-light text-portfolio-white mb-4">Lucas Montenegro</h3>
              <p className="text-gray-400 leading-relaxed">
                Visual storyteller capturing authentic moments through photography and cinematography.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium text-portfolio-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-portfolio-blue transition-colors">About</a></li>
                <li><a href="#gallery" className="hover:text-portfolio-blue transition-colors">Gallery</a></li>
                <li><a href="#projects" className="hover:text-portfolio-blue transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-portfolio-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-medium text-portfolio-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Portrait Photography</li>
                <li>Wedding Documentation</li>
                <li>Commercial Video</li>
                <li>Brand Storytelling</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-portfolio-blue/10">
            <p className="text-gray-500 text-sm">
              © 2024 Lucas Montenegro. Based in San Francisco, Creating Worldwide.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}