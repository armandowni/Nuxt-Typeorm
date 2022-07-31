export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-typeorm",
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
  privateRuntimeConfig: {
    baseURL:
      process.env.NODE_ENV == "production"
        ? "https://nuxt-typeorm.herokuapp.com"
        : "http://localhost:3000",
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/vuetify",
  ],
  build: {},

  vuetify: {
    defaultAssets: { icons: "fa" },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["./modules/api"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  watch: ["./api/express/routes"],
};
