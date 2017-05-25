//var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');

module.exports = {


  entry: './src/index.ts',
  output: {
    path: __dirname + "/dist",
    publicPath: 'dist/',
    filename: "app.bundle.js"
  },
  resolve: {
    extensions: ['.scss', '.ts', '.js']
  },

  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader?modules', 'sass-loader' ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },

  plugins: [
    //new LiveReloadPlugin(),
    // new webpack.HotModuleReplacementPlugin()
      new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin()
  ]
};
