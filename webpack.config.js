const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".webpack.js", ".web.js", ".mjs", ".js", ".json"],
  },
  output: {
    filename: 'meterapi.js',
    path: path.resolve(__dirname, 'dist'),
  },
};