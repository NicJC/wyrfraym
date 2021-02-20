// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: [
    path.resolve('src', 'js', 'app.js'),
    path.resolve('src', 'styles', 'app.css'),
  ],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
// .babelrc
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 3,
        "useBuiltIns": "usage"
      }
    ]
  ]
}
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
  ],
};
// package.json
{
  "private": true,
  "browserslist": "> 1%",
  "scripts": {
    "start": "webpack --mode=development --watch",
    "build": "webpack --mode=production"
  },
  "devDependencies": {
    "@babel/core": "^7.8.7",
    "@babel/preset-env": "^7.8.7",
    "autoprefixer": "^9.7.4",
    "babel-loader": "^8.0.6",
    "core-js": "^3.6.4",
    "css-loader": "^3.4.2",
    "mini-css-extract-plugin": "^0.9.0",
    "postcss-loader": "^3.0.0",
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11"
  }
}