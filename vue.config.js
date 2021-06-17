module.exports = {
  publicPath: process.env.BASE_URL || '/',
  configureWebpack: {
    devtool: 'source-map'
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/_variables.scss";'
      }
    }
  }
}
