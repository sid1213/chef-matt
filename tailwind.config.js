/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: "#D29A5A",
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 9%),rgba(0, 0, 0, 0.5)),url('/assets/hero-bg.jpeg')",
        promotion: "url('./assets/bg-1.png')",
        newletter:
          " linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url('/assets/bg-2.jpeg')",
      },
    },
  },
  plugins: [],
};
