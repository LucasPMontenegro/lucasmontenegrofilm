'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Camera, Film, Play } from 'lucide-react';

export default function HeroSection() {
  const scrollToNext = () => {
    console.log("HeroSection: Scrolling to about section");
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark background with subtle patterns */}
      <div className="absolute inset-0 bg-portfolio-black">
        <div className="absolute inset-0 bg-blue-glow opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Floating camera/film icons */}
      <div className="absolute top-20 left-10 opacity-30">
        <Camera className="w-8 h-8 text-portfolio-blue animate-float" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <Film className="w-6 h-6 text-portfolio-blue-light animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute bottom-32 left-20 opacity-25">
        <Play className="w-7 h-7 text-portfolio-blue animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="text-center max-w-6xl mx-auto relative z-10 px-6">
        {/* Main title with dramatic entrance */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-thin mb-4 text-portfolio-white leading-none tracking-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            LUCAS
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-gradient leading-none tracking-wide"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          >
            MONTENEGRO
          </motion.h1>
        </motion.div>

        {/* Subtitle with typing effect */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 font-light tracking-[0.3em] uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Photographer & Filmmaker
        </motion.p>

        {/* Divider line */}
        <motion.div
          className="w-24 h-0.5 bg-portfolio-blue mx-auto mb-12"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 2.2 }}
        />

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Capturing the extraordinary in everyday moments. Through lens and vision, 
          I transform fleeting instances into timeless visual stories that speak to the soul.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <button className="px-10 py-6 text-lg font-medium bg-portfolio-blue hover:bg-portfolio-blue-dark text-portfolio-black border-0 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-blue/30">
            Explore My Work
          </button>
          <button className="px-10 py-6 text-lg font-medium border border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-portfolio-black rounded-lg transition-all duration-300 hover:scale-105 bg-transparent">
            Start a Project
          </button>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-[0.2em] font-light group-hover:text-portfolio-blue transition-colors">
            Discover the Journey
          </p>
          <div className="flex flex-col items-center animate-bounce">
            <ArrowDown className="w-5 h-5 text-portfolio-blue mb-2" />
            <div className="w-0.5 h-12 bg-gradient-to-b from-portfolio-blue to-transparent"></div>
          </div>
        </motion.button>
      </div>
    </section>
  );
}