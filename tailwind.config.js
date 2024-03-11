/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF338F",
        "text-color": "#0f177a",
        "text-color-dark": "#e2e8f0",
        "p-color": "#64748b",
        "p-color-dark": "#94a3b8",
        // title: "#0f177a",
        // darkTitle: "#e2e8f0",
        // desc: "#64748b",
        // darkDesc: "#94a3b8",
      },
    },
  },
  plugins: [],
};
