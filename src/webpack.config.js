const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  return {
    entry: "./src/main.jsx",

    output: {
      path: path.resolve(__dirname, "../admin/build"),
      filename: "index.js",
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext]",
          },
        },
      ],
    },

    resolve: {
      extensions: [".js", ".jsx"],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "index.css",
      }),
    ],

    devtool: isDev ? "source-map" : false,
  };
};
