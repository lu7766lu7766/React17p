const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        }
      })
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    host: "localhost",
    compress: true,
    hot: true,
    port: 3000,
    publicPath: "/"
  },
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].css",
    publicPath: "/",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      title: "Caching"
    })
  ]
};
