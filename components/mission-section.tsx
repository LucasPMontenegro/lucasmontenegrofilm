'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Heart, Star, Target } from 'lucide-react';

export default function MissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const values = [
    {
      icon: Heart,
      title: "Authentic Moments",
      description: "Capturing genuine emotions and real stories that resonate with the human experience."
    },
    {
      icon: Star,
      title: "Creative Excellence", 
      description: "Pushing artistic boundaries while maintaining the highest standards of visual craftsmanship."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every frame serves a purpose, every story matters, every moment is intentional."
    },
    {
      icon: Camera,
      title: "Visual Innovation",
      description: "Embracing new techniques and technologies to tell stories in compelling ways."
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-blue-glow opacity-20"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-portfolio-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mission Statement */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-thin mb-8 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            My Mission
          </motion.h2>
          
          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              To capture the extraordinary in the ordinary, transforming fleeting moments 
              into timeless visual narratives that inspire and connect.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Through the lens of my camera and the art of cinematography, I seek to reveal 
              the beauty, emotion, and truth that exists in every frame. Each project is an 
              opportunity to tell a story that matters.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-portfolio-dark border border-portfolio-blue/30 rounded-2xl flex items-center justify-center group-hover:border-portfolio-blue/60 transition-all duration-300 hover-glow">
                  <value.icon className="w-8 h-8 text-portfolio-blue group-hover:text-portfolio-blue-light transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-portfolio-white mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic max-w-4xl mx-auto">
            "Photography is not about the gear, the settings, or the perfect moment. 
            It's about seeing the world through a lens of curiosity and capturing 
            the soul of what you see."
          </blockquote>
          <p className="text-portfolio-blue mt-6 font-medium">— Lucas Montenegro</p>
        </motion.div>
      </div>
    </section>
  );
}