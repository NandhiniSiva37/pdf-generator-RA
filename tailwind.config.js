/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    boxShadow: {
      buttonShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      topShadow: "-2px -2px 2px .5px rgba(0, 0, 0, 0.25)",
      bottomShadow: "1px 1px 2px .5px rgba(0, 0, 0, 0.25)",
    },
    colors: {
      lightGrey: "#777D7f",
      mainGrey: "#eef1f2",
      heading2: "#2D2D2D",
      heading1: "#1C1D1E",
      white: "#FFFFFF",
      blue: "#1463FF",
      lightBlue: "#F2F4F5",
      labelGrey: "#5E6B76",
      lineGrey: "#C4C4C4",
      textGrey: "#696969",
      black: "#000000",
      minimal: "#E8EEFB",
      linear: "#005DFF",
      centr: "#00A3FF",
      final: "#21DDFF",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      count: "50px",
    },
    fontSize: {
      xxs: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      title: "1.75rem",
      header: "1.875rem",
    },
    extend: {
      spacing: {
        9: "0.566rem",
      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
  },
  plugins: [],
};
