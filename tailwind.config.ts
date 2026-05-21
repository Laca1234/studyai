import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#111827',
        surface2: '#1e293b',
        brand: '#7c3aed',
        accent: '#38bdf8'
      },
      boxShadow: {
        glow: '0 25px 60px rgba(124, 58, 237, 0.14)',
        soft: '0 20px 50px rgba(15,23,42,0.15)'
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 35%)'
      }
    }
  },
  plugins: []
};

export default config;
