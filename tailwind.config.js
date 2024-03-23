/** @type {import('tailwindcss').Config} */

import typographyPlugin from "@tailwindcss/typography";
import typographyStyles from "./typography";
import daisyui from "daisyui";

module.exports = {
  corePlugins: {
    // Preflight is a CSS reset
    // preflight: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    // typography: typographyStyles,
    extend: {},
  },
  plugins: [
    // daisyui,
    typographyPlugin
  ],
  // daisyui: {
  //   themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  //   darkTheme: "dark", // name of one of the included themes for dark mode
  //   base: true, // applies background color and foreground color for root element by default
  //   styled: true, // include daisyUI colors and design decisions for all components
  //   utils: true, // adds responsive and modifier utility classes
  //   prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  //   logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  //   themeRoot: ":root", // The element that receives theme color CSS variables
  // }
};
