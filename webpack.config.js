const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "ppi.js"
  }
};