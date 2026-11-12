/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: "#f6d80c",
        ink: "#15171a",
        late: "#c81f0f",
        ribbon: "#1b2f8f",
        stock: "#f7f5ee",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "sans-serif"],
        dot: ["Doto", "ui-monospace", "monospace"],
        sans: ['"Familjen Grotesk"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
