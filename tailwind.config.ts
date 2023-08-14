import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#A10F5C',
        secondary: '#353036',
        background: '#101010',
        dimText: '#9e9c9e',
        darkDimText: '#9ca3af',
        darkBorder: '#303949',
        darkBg: '#111827',
        darkBgLight: '#1f2937',
      },
      gridTemplateColumns: {
        sidebar: '250px auto', //for sidebar layout
        'sidebar-collapsed': '64px auto', //for collapsed sidebar layout
      },
    },
  },
  plugins: [],
}
export default config
