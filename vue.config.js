const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/pages/Chat/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Web Chat",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    auth: {
      entry: "src/pages/Auth/main.js",
      template: "public/index.html",
      filename: "auth.html",
      title: "Web Chat - Authorize",
      chunks: ["chunk-vendors", "chunk-common", "auth"],
    },
  },
  configureWebpack: {
    mode: "development",
  },
  /** SCSS assets **/
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `@import "@/assets/scss/main.scss";`,
  //     },
  //   },
  // },
});
