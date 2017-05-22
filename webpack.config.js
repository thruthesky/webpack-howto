const path = require('path');
module.exports = {
  entry: './my-file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(ts)$/, use: 'ts-loader'}
    ]
  }
};
