import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
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
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        d1_databases: [
          {
            binding: "DB",
            database_name: "mattheweegan-dot-com",
            database_id: process.env.NUXT_DB_ID,
          },
        ],
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
