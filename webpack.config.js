var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.scss', '.ts', '.js']
  },

  plugins: [
    new LiveReloadPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  entry: './src/index.ts',
  output: {
    path: __dirname + "/dist",
    publicPath: 'dist/',
    filename: "app.bundle.js"
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
  }
};
