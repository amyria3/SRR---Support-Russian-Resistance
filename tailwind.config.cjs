module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'ssm': {'max': '500px'}
    },
  },
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
      dt: {
        typo: {
          DEFAULT: "rgba(250, 250, 250, 1)"
        },
        background: {
          DEFAULT: "rgba(37, 37, 37, 1)",
          input: "gba(250, 250, 250, 0.15)",
          card: "rgba(0, 0, 0, 0.1)"
        },
        interactive: {
          DEFAULT: "rgba(96, 165, 250, 1)"
        },
      },
      yellow: {
        DEFAULT: "rgba(255, 230, 0, 1)"
      },
    },
  },
  extend: {
  },
}

//ISSUES:
////fonts don't work
