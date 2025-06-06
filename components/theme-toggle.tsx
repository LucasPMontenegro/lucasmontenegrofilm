"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("ThemeToggle: Component mounted, current theme:", theme);
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log("ThemeToggle: Switching theme to:", newTheme);
    setTheme(newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-3 rounded-full glass-effect glow-effect transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-portfolio-blue" />
        )}
      </motion.div>
    </motion.button>
  );
}