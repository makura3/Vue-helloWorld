const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development', //webpack4〜
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}