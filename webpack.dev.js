const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractCss = require('Mini-css-extract-plugin')
// const TerserJSPlugin = require('terser-webpack-plugin')

const PATHS = {
  root: path.join(__dirname, '/'),
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
};

let config = {

  mode: 'development',

  entry: './src/scripts/index.js',

  output: {
    path: PATHS.dist,
    filename: 'scripts/main.js'
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: PATHS.src,
              name: `[path][name].[ext]`,
              esModule: false,
            },
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              esModule: false,
            },
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
  ]
};

module.exports = config