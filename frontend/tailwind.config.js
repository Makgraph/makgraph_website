/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "360px",
      sm: "600px",
      md: "905px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      scale: {
        110: "1.10", // 10% agrandissement
        115: "1.15", // 15% agrandissement
        120: "1.20", // 20% agrandissement
        125: "1.25", // 25% agrandissement
        // Ajoutez d'autres valeurs si nécessaire
      },
      colors: {
        danger: {
          DEFAULT: "#e3342f",
          light: "#f56565",
          dark: "#c51e1a",
        },
        primary: "#216487",
        onPrimary: "#FFFFFF",
        secondary: "#565584",
        onSecondary: "#3ab7bf",
        tertiary: "#ecebff",
        onTertiary: "#78dcca",
        onSurface: "#181C1F",
        surfaceContainer: "#F0F4F8",
        secondaryContainer: "#D2E5F4",
        onSecondaryContainer: "#0B1D28",
        outline: "#71787E",
        error: "#BA1A1A",
        white: "#ffffff",
        black: "#000000",
      },

      keyframes: {
        slideInLeft: {
          from: { transform: "translateX(-300px)" },
          to: { transform: "translateX(0)" },
        },
        slideInRight: {
          from: { transform: "translateX(300px)", opacity: "0%" },
          to: { transform: "translateX(0)" },
        },
        scalebtn: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
      },
      animation: {
        slideInLeftFast: "slideInLeft 1s linear",
        slideInLeftSlow2: "slideInLeft 1.4s linear",
        slideInLeftSlow3: "slideInLeft 1.7s linear",
        slideInLeftSlow4: "slideInLeft 1.9s linear",
        slideInRight: "slideInRight 1.3s ease-in",
        scalebtn: "scalebtn 2s ease-in infinite",
      },
    },
    plugins: [],
  },
};
