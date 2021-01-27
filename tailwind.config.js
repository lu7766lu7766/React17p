module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    mode: "all",
    content: ["./src/**/*.html", "./src/**/*.tsx"]
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem"
      }
    },
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
