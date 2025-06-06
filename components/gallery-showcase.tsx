'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Maximize2, Clock, MapPin } from 'lucide-react';

export default function GalleryShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredWorks = [
    {
      id: 1,
      type: 'photography',
      title: 'Urban Portraits',
      subtitle: 'Street Photography Series',
      location: 'San Francisco, CA',
      year: '2024',
      aspect: 'portrait',
      duration: null,
    },
    {
      id: 2,
      type: 'film',
      title: 'Sunset Sessions',
      subtitle: 'Music Video Production',
      location: 'Malibu, CA',
      year: '2024',
      aspect: 'landscape',
      duration: '3:42',
    },
    {
      id: 3,
      type: 'photography',
      title: 'Natural Light',
      subtitle: 'Portrait Collection',
      location: 'Studio',
      year: '2024',
      aspect: 'square',
      duration: null,
    },
    {
      id: 4,
      type: 'film',
      title: 'Brand Story',
      subtitle: 'Commercial Documentary',
      location: 'Los Angeles, CA',
      year: '2024',
      aspect: 'landscape',
      duration: '5:18',
    },
    {
      id: 5,
      type: 'photography',
      title: 'Golden Hour',
      subtitle: 'Lifestyle Photography',
      location: 'Big Sur, CA',
      year: '2024',
      aspect: 'landscape',
      duration: null,
    },
    {
      id: 6,
      type: 'photography',
      title: 'City Lights',
      subtitle: 'Night Photography',
      location: 'San Francisco, CA',
      year: '2024',
      aspect: 'portrait',
      duration: null,
    },
  ];

  return (
    <section className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-gradient">
            Visual Gallery
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A curated collection of photography and cinematography showcasing 
            diverse styles, locations, and stories.
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <motion.div
          className="masonry-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="masonry-item group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            >
              <div className="relative bg-portfolio-dark border border-portfolio-blue/20 rounded-xl overflow-hidden hover-lift hover-glow">
                {/* Image/Video Placeholder */}
                <div className={`
                  image-placeholder
                  ${work.aspect === 'portrait' ? 'aspect-portrait' : ''}
                  ${work.aspect === 'landscape' ? 'aspect-landscape' : ''}
                  ${work.aspect === 'square' ? 'aspect-square' : ''}
                `}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-portfolio-blue/20 rounded-full flex items-center justify-center">
                      {work.type === 'film' ? (
                        <Play className="w-8 h-8 text-portfolio-blue" />
                      ) : (
                        <Maximize2 className="w-8 h-8 text-portfolio-blue" />
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {work.type === 'film' ? 'Video Content' : 'Image Gallery'}
                    </p>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-portfolio-blue font-medium uppercase tracking-wider">
                        {work.type}
                      </span>
                      {work.duration && (
                        <span className="text-xs text-gray-400 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {work.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-medium text-white mb-1">
                      {work.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {work.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {work.location}
                      </span>
                      <span>{work.year}</span>
                    </div>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {work.type === 'film' ? (
                      <Play className="w-4 h-4 text-white" />
                    ) : (
                      <Maximize2 className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button className="px-8 py-4 bg-transparent border border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-black transition-all duration-300 rounded-lg font-medium">
            View Complete Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}