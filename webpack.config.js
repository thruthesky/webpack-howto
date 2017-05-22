const path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.(ts)$/, use: 'ts-loader' }
    ]
  }
};
