/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zhiMangXing: ["Zhi Mang Xing", "sans-serif"],
      },
    },
    colors: {
      maroon: "#A91D3A",
      pink: "#C73659",
      black: "#151515",
      white: "#FFFFFF",
      yellow: "#FFDB00",
    },
    aspectRatio: {
      3: "3/1",
      2: "2/1",
    },
  },
  plugins: [],
};
