module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Poppins", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },

      boxShadow: {
        "inner": "inset 0 -80px 70px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
