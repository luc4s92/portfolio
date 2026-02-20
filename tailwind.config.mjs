/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#090005", // fondo principal casi negro violeta
        "secondary-white": "#d1d1db", // texto suave, no blanco puro

        "primary-blue": "#5a3ea6", // violeta oscuro principal
        "secondary-blue": "#4b2f91", // violeta más profundo (hover)
        "tertiary-blue": "#372166", // violeta muy oscuro (detalles)
        "light-blue": "#7b5fc9",
        "purple-primary": "#9D00FF", // violeta apagado (highlights)
        "purple-secundary": "#8A00FF", // violeta apagado (highlights)
      },
      backgroundImage: {
        "hero-pattern": "url('/mosaic.png')",
      },
    },
  },
  plugins: [],
};
