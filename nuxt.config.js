export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-vuetify",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  env: {
    NUXT_API_SECRET: process.env.NUXT_API_SECRET || "http://localhost:3000",
  },
  css: ["./static/global.css"],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  vuetify: {
    defaultAssets: { icons: "fa" },
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend(config, { isClient }) {
      if (isClient) {
        config.performance.maxAssetSize = 450000;
      }
    },
  },
};
