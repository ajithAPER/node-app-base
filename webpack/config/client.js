const Webpack = require('webpack');
const Path  = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = ( process.env.NODE_ENV !== 'production' );

const init = (dir) => {
  return {
    bail: !isDev,
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    entry: Path.join( dir, '/src/client/index.js' ),
    output: {
      path: Path.join( dir, 'build/statics/' ),
      filename: 'js/index.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'import-glob'
          }
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'graphql-tag/loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                publicPath: '/css/'
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              publicPath: '/statics/images/',
              name: '[hash].[ext]'
            }
          }
        },
        {
          test: /\.(woff2|ttf|eot)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              publicPath: '/statics/fonts/',
              name: '[hash].[ext]'
            }
          }
        }
      ]
    },
    plugins: [
      new Webpack.DefinePlugin(
        {
          'process.env.RUN_ENV': JSON.stringify(process.env.RUN_ENV),
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      ),
      new MiniCssExtractPlugin({
        filename: "css/index.css",
        chunkFilename: "index.css"
      }),
    ],
    optimization: {
      minimizer: [
        new UglifyJSPlugin(
          {
            sourceMap: true,
            uglifyOptions: {
              compress: {
                warnings: false,
              },
              mangle: {
                safari10: true,
              },
              output: {
                comments: false,
                ascii_only: true
              }
            }
          }
        ),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    devServer: {
      contentBase: Path.join( dir, 'build/statics/' ),
      disableHostCheck: true
    }
  };
}

module.exports = init;
