import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.24), 0 12px 40px -16px rgba(59,130,246,0.7)',
      },
      animation: {
        shimmer: 'shimmer 2.2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
