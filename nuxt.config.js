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
  ssr: true,
  target: "static",
  privateRuntimeConfig: {
    baseURL:
      process.env.NODE_ENV == "production" ? "0.0.0.0" : "localhost:3000",
    DB_USERNAME: "ndphgigmsldyrf",
    DB_PASSWORD:
      "2f86ab68c36d3be06b46dd7c10bd1422ffa920303040c3081fb48e823b54f913",
    DB_HOST: "ec2-3-230-122-20.compute-1.amazonaws.com",
    DB_DATABASE: "d3guldico2husd",
    DB_PORT: 5432,
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
    "@nuxtjs/fontawesome",
    "@nuxtjs/vuetify",
  ],
  build: {
    optimization: {
      minimize: true,
    },
  },
  fontawesome: {
    component: "Fa",
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["~/modules/api"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  watch: ["~/api/express/routes"],
};
