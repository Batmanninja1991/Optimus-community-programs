/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#a8d0e6", // Light blue
          DEFAULT: "#5a8dce", // Medium blue (default primary color)
          dark: "#003f91", // Dark blue
        },
        secondary: {
          light: "#fde2e2", // Light pink
          DEFAULT: "#f297a2", // Medium pink (default secondary color)
          dark: "#d75475", // Dark pink
        },
        accent: {
          light: "#fff7e3", // Light yellow
          DEFAULT: "#ffedb5", // Medium yellow (default accent color)
          dark: "#ffc107", // Dark yellow
        },
        neutral: {
          light: "#f7f7f7", // Light gray
          DEFAULT: "#e1e1e1", // Medium gray (default neutral color)
          dark: "#a1a1a1", // Dark gray
        },
        text: {
          DEFAULT: "#10374d", // Main text color
          light: "#ffffff", // Light text color for dark backgrounds
          dark: "#000000", // Dark text color
        },
      },
    },
    plugins: [],
  },
};
