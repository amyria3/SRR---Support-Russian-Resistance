module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: "rgba(240, 240, 240, 1)",
        card: "rgba(255, 255, 255, 1)",
      },
      interactive: {
        DEFAULT: "rgba(0, 85, 212, 0.25)",
        mid: "rgba(0, 85, 212, 0.5)",
        hover: "rgba(0, 85, 212, 1)",
      },
      line: "rgba(37, 37, 37, 0.5)",
      typo: {
        DEFAULT: "rgba(37, 37, 37, 1)",
      },
    },
  },
  fontFamily: {
    'inter': ['Inter', 'sans-serif'],
    'italiana': ['Italiana', 'serif'],
  },
  extend: {
  },
}

//ISSUES:
////fonts don't work
