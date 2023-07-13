/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        grotesk: ["Space Grotesk"],
      },
      colors: {
        primary: "#181B92",
        gray: {
          light: "#FAFAFA",
          main: "#CBD5E1",
          dark: "#64748B",
        },
        plans: {
          yearly: "#D1FFDD",
          quarterly: "#BFECFF",
          monthly: "#C8C0FF",
          weekly: "#FAF8C0",
        },
        background: "#F4F5FC",
        users: {
          subscriber: "#27272A",
          agent: "#824FE7",
          admin: "#1C5551",
        },
      },
    },
  },
  plugins: [],
};
