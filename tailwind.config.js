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
    colors: {
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
    // spacing: {
    //   1: "4px",
    //   2: "8px",
    //   3: "12px",
    //   4: "16px",
    //   5: "20px",
    //   6: "24px",
    //   7: "28px",
    //   8: "32px",
    // },
    extend: {},
  },
  plugins: [],
};
