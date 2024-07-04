import type { Config } from 'tailwindcss';
import defaultCnnfig from 'tailwindcss/defaultConfig';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        ...defaultCnnfig.theme?.fontFamily,
        sans: ['var(--font-generanl-sans)'],
        serif: ['var(--euclid-circular-a)']
      },
      colors: {
        linpayDeepBlue: '#040119'
      }
    }
  },
  plugins: []
};
export default config;
