/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Maven Pro"],
        grotesque: ["Darker Grotesque"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#181B92",
        misc: {
          "yearly-plan": "#5ECCA0",
          "quarterly-plan": "#0A0A0A",
          "monthly-plan": "#CB9BFB",
          "weekly-plan": "#F9FD92",
        },
        gray: {
          light: { primary: "#F9F9F9", secondary: "#EBEBEB" },
          dark: "#64748B",
        },
      },
    },
  },
  plugins: [],
};
