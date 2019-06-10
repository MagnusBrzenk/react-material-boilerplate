import webpack from "webpack";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin/lib";

// Reset where to look for tsconfig.json
delete process.env.TS_NODE_PROJECT;

//////////////////////////////////////////////////////////
// Webpack directives common to both front- and backend //
//////////////////////////////////////////////////////////

export const commonWebpackConfig: any = {
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".svg"],

    plugins: [
      // Lets you use `paths` in tsconfig.json to generate aliases here in webpack
      new TsconfigPathsPlugin({
        configFile: path.resolve("tsconfig.json")
      })
    ]
  },

  module: {
    rules: [
      // MINOR FILE LOADERS:
      { test: /\.html$/, loader: "html-loader", exclude: /node_modules/ },
      { test: /\.txt$/, loader: "raw-loader", exclude: /node_modules/ },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ]
};

export default commonWebpackConfig;
