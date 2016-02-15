var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: [
     'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/index.js'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
   publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
