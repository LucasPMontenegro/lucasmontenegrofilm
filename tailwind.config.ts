import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Source Code Pro', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-mesh': 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)',
        'blue-glow': 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        portfolio: {
          black: '#000000',
          dark: '#0a0a0a',
          gray: '#1a1a1a', 
          white: '#ffffff',
          blue: '#60a5fa',
          'blue-dark': '#3b82f6',
          'blue-light': '#93c5fd',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(96, 165, 250, 0.6)',
          },
        },
        'image-reveal': {
          '0%': {
            clipPath: 'inset(0 100% 0 0)',
          },
          '100%': {
            clipPath: 'inset(0 0 0 0)',
          },
        },
        'text-reveal': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'slide-in-left': 'slide-in-left 1s ease-out',
        'slide-in-right': 'slide-in-right 1s ease-out',
        'scale-in': 'scale-in 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'image-reveal': 'image-reveal 1.2s ease-out',
        'text-reveal': 'text-reveal 0.8s ease-out',
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '16/9',
        'square': '1/1',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
