"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Play, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Urban Portraits Series",
    description: "A compelling portrait series capturing the essence of city life through intimate character studies in natural urban environments.",
    image: "/api/placeholder/600/400",
    tags: ["Portrait", "Street Photography", "Natural Light", "Documentary"],
    liveUrl: "#",
    videoUrl: "#",
    featured: true,
    type: "Photography",
  },
  {
    id: 2,
    title: "Brand Campaign Film",
    description: "Cinematic commercial piece showcasing sustainable fashion through powerful visual narrative and emotional storytelling.",
    image: "/api/placeholder/600/400",
    tags: ["Commercial", "Fashion", "Sustainability", "Narrative"],
    liveUrl: "#",
    videoUrl: "#",
    featured: true,
    type: "Film",
  },
  {
    id: 3,
    title: "Wedding Documentary",
    description: "Intimate wedding documentation blending candid moments with artistic compositions in scenic coastal location.",
    image: "/api/placeholder/600/400",
    tags: ["Wedding", "Documentary", "Coastal", "Candid"],
    liveUrl: "#",
    videoUrl: "#",
    featured: false,
    type: "Photography",
  },
  {
    id: 4,
    title: "Music Video Production",
    description: "High-energy music video featuring dynamic camera movement, creative lighting, and synchronized choreography.",
    image: "/api/placeholder/600/400",
    tags: ["Music Video", "Choreography", "Creative Lighting", "Dynamic"],
    liveUrl: "#",
    videoUrl: "#",
    featured: false,
    type: "Film",
  },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  console.log("ProjectsSection: In view status:", inView);

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gradient">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A curated selection of photography and film projects that showcase my 
            visual storytelling approach. Each piece represents a unique narrative 
            and artistic vision.
          </p>
        </motion.div>

        {/* Featured projects grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-portfolio-blue/20 to-purple-500/20 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue to-purple-500 opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.videoUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-portfolio-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-portfolio-blue/10 text-portfolio-blue rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="text-sm text-portfolio-blue hover:underline flex items-center"
                    >
                      View Gallery <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <a
                      href={project.videoUrl}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-portfolio-blue flex items-center"
                    >
                      Watch <Play className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span className="mr-2">{project.type}</span>
                    <ArrowRight className="w-4 h-4 text-portfolio-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className="group glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-portfolio-blue transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    className="p-1 text-gray-400 hover:text-portfolio-blue transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.videoUrl}
                    className="p-1 text-gray-400 hover:text-portfolio-blue transition-colors"
                  >
                    <Play className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}