"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    console.log("CustomCursor: Component mounted");
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      console.log("CustomCursor: Mouse entered hoverable element");
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      console.log("CustomCursor: Mouse left hoverable element");
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updatePosition);
    
    // Add hover listeners to interactive elements
    const hoverElements = document.querySelectorAll('a, button, [role="button"]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}