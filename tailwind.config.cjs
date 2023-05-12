module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xl: { min: "1400px" },

      lg: { min: "992px" },

      md: { min: "823px" },

      sm: { min: "768px" },

      ssm: { min: "576px" },
    },
    colors: {
      white: {
        DEFAULT: "rgba(240, 239, 239, 1)",
        card: "rgba(255, 255, 255, 0.5)",
      },
      interactive: {
        DEFAULT: "rgba(0, 85, 212, 0.25)",
        mid: "rgba(0, 85, 212, 0.5)",
        hover: "rgba(0, 85, 212, 1)",
      },
      line: {
        DEFAULT: "rgba(37, 37, 37, 0.5)",
        light: "rgba(37, 37, 37, 0.2)",
      },
      typo: {
        DEFAULT: "rgba(37, 37, 37, 1)",
      },
      dt: {
        typo: {
          DEFAULT: "rgba(250, 250, 250, 1)",
        },
        background: {
          DEFAULT: "rgba(37, 37, 37, 1)",
          input: "rgba(250, 250, 250, 0.15)",
          card: "rgba(250, 250, 250, 0.05)",
        },
        interactive: {
          DEFAULT: "rgba(96, 165, 250, 1)",
        },
      },
      yellow: {
        DEFAULT: "rgba(255, 230, 0, 1)",
      },
      red: {
        DEFAULT: "rgba(255, 0, 0, 1)",
      },
    },
  },
}