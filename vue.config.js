const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Web Chat",
    },
    auth: {
      // entry for the page
      entry: "src/auth/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "auth.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Web Chat - Authorize",
    },
  },
  configureWebpack: {
    mode: "development",
  },
  /** SCSS assets **/
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
});
