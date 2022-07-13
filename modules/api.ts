export default function (moduleOptions: any) {
  // Add middleware only with `nuxt dev` or `nuxt start`
  if (this.options.dev || this.options._start) {
    this.addServerMiddleware("~/api/");
  }
}
