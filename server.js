import express from "express"
import path from "path"
import webpack from "webpack"
import webpackMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"

import webpackConfig from "./webpack.config.dev.js"
const compiler = webpack(webpackConfig)

let app = express().
  use(webpackMiddleware(compiler)).
  use(webpackHotMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    colors: true,
    progress: true
  }))
  .get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "./dist/index.html"))
  })
  .listen(8080, () => console.log("Running on 0.0.0.0:8080"))
