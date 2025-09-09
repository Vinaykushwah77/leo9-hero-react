/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ye zaroor add karo
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // Blue
        accent: "#3b82f6",  // Light Blue
      },
      keyframes: {
        "float-blob": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -30px) scale(1.05)" },
        },
      },
      animation: {
        "float-blob": "float-blob 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
