const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    inject: "./src/inject.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  mode: "production",
  plugins: [
    new CopyPlugin([
      { from: './images', to: 'images' },
      { from: './options.html', to: 'options.html' },
      { from: './options.js', to: 'options.js' },
      { from: './options.css', to: 'options.css' },
      { from: './src/manifest.json', to: 'manifest.json' }
    ])
  ]
};
