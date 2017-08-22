import path from "path"
import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"

export default {
  entry: [
    "babel-polyfill",
    "webpack-hot-middleware",
    path.join(__dirname, "/src/index.js"),
  ],
  resolve: {
    extensions: [ ".js", ".jsx" ],
    modules: [
      path.resolve("./src"),
      path.resolve("./node_modules")
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        include: path.join(__dirname, "src"),
        loaders: ["react-hot-loader", "babel-loader"],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("main.css")
  ]
}
