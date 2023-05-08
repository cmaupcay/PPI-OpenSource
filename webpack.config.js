const path = require('path').resolve(__dirname, "./dist");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: "ppi",
  mode: "production",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".scss", ".mp3", ".md"],
  },
  module: {
    rules: [
      { 
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              warnRuleAsWarning: true,
              sourceMap: false,
              sassOptions: {
                outputStyle: "compressed",
                includePaths: ["src"]
              }
            }
          }
        ],
        exclude: "/node_modules/"
      },
      {
        test: /\.(png|jpg|svg|mp3|md)$/,
        type: "asset/resource"
      },
      {
        test: /\.html$/,
        use: "html-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  output: {
    path: path,
    filename: "ppi.js",
    assetModuleFilename: "ressources/[hash][ext][query]",
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "ppi.css"
    }),
    new HtmlWebpackPlugin({
      template: "src/html/index.html"
    })
  ]
}