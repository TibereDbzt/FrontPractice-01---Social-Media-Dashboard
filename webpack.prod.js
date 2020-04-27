const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
    root: path.join(__dirname, '/'),
    src: path.join(__dirname, '/src'),
    dist: path.join(__dirname, '/dist'),
};

new webpack.EnvironmentPlugin(['NODE_ENV']);

let config = {

    mode: 'production',

    entry: './src/scripts/index.js',

    output: {
      path: PATHS.dist,
      filename: 'scripts/main.js',
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            ctx: {
                                env: 'production'
                            }
                        }
                    }
                }, 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: PATHS.src,
                            name: `[path][name].[ext]`,
                        },
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        context: PATHS.src,
                        name: '[path][name].[ext]',
                    },
                }]
            },
        ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: `style.css`
      })
    ]
};

module.exports = config;