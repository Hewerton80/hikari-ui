/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#f3f4f9",
        "dark-body": "#1a1a3c",
        "dark-card": "#2a2a4a",
        "dark-screen": "#0000004c",
        input: "#495057",
        primary: "#844fc1",
        secondary: "#6c7293",
        warning: "#f39915",
        info: "#3b86d1",
        dark: "#282f3a",
        light: "#e2e6ea",
        muted: "#a5abcc",
        black: "#001737",
        gray: "#76838f",
        "dark-hover": "#303052",
        "gray-light": "#eaeaf1",
        "gray-lighter": "#f7f8fc",
        "gray-lightest": "#e4e4f4",
        "gray-border": "#CED4DA",
      },
    },
  },
  plugins: [],
};
