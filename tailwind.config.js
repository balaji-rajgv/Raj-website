export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: "#0A0F2C",
        brand: { DEFAULT: "#1673B8", dark: "#115E97", soft: "#E6F1FA" },
        sun: "#F5B800",
        gain: "#1A9448",
        loss: "#E0262D",
        canvas: "#F5F6FA",
        line: "#E3E6EF",
        muted: "#5A6079",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
};
