import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  content: {
    experimental: { sqliteConnector: "native" },
  },
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/eslint"],
  mdc: {
    headings: {
      anchorLinks: {
        h1: true,
        h2: true,
        h3: true,
        h4: false,
        h5: false,
        h6: false,
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
