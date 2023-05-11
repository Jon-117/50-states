// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  devServer: {
    // tell the dev server to send any api requests to the address below:
    proxy:'http://127.0.0.1:3000'
    // so any api routes will be prefaced by the proxy address.
  }
}