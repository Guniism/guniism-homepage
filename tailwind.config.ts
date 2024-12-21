import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'base': '#222222',
        'base2': '#111111',
        'bd': '#444444',
        'con': '#333333',
        'wht': '#ffffff',
        'green': '#40C173',
        'lgreen': '#52eb73',
      },
      borderRadius: {
        'gun': '0.5rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
