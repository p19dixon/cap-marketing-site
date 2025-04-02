import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { capGreen: '#4CAF50' } } },
  plugins: [],
};
export default config;