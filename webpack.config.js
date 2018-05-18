const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development', //webpack4〜
  entry: [
    './src/app.js'
  ],
  output: {
    filename: 'app.js',
    //path: Path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js' これがあると完全ビルドになってしまう
  //   }
  // },
  plugins: [
    new VueLoaderPlugin()
  ]
}