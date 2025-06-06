"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Film, Eye, Award } from 'lucide-react';

const skills = [
  {
    icon: Camera,
    title: "Portrait Photography",
    description: "Studio & Natural Light, Fashion, Corporate",
    color: "text-blue-500",
  },
  {
    icon: Film,
    title: "Cinematography",
    description: "Documentary, Commercial, Music Videos",
    color: "text-purple-500",
  },
  {
    icon: Eye,
    title: "Visual Storytelling",
    description: "Narrative Structure, Color Grading, Editing",
    color: "text-yellow-500",
  },
  {
    icon: Award,
    title: "Creative Direction",
    description: "Concept Development, Art Direction, Client Collaboration",
    color: "text-green-500",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  console.log("AboutSection: In view status:", inView);

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a visual storyteller passionate about capturing authentic moments and creating 
            compelling narratives through photography and film. With expertise in both technical 
            mastery and artistic vision, I transform concepts into powerful visual experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              My journey began with a fascination for capturing fleeting moments. 
              Over the years, I've developed into a versatile visual artist, working 
              across photography and cinematography to tell stories that matter.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not behind the camera, you'll find me exploring new locations, 
              studying light patterns, or collaborating with other creatives to push 
              the boundaries of visual storytelling.
            </p>
          </motion.div>

          {/* Profile image placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-portfolio-blue/20 to-purple-500/20 p-8 glass-effect">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-portfolio-blue to-purple-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">LM</span>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-portfolio-blue/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="p-6 glass-effect rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-6 h-6 ${skill.color}`} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {skill.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}