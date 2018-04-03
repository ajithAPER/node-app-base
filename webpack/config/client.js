const Webpack = require('webpack');
const Path  = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const isDev = ( process.env.NODE_ENV !== 'production' );

const init = (dir) => {
  return {
    bail: !isDev,
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    entry: Path.join( dir, '/src/client/index.js' ),
    output: {
      path: Path.join( dir, 'build/client' ),
      filename: 'index.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.js$/,
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
          loader: ExtractTextPlugin.extract( {
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  minimize: !isDev,
                  sourceMap: !isDev,
                }
              },
            ]
          } )
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'statics/images/',
              publicPath: '/images/',
              name: '[hash].[ext]'
            }
          }
        },
        {
          test: /\.(woff2|ttf|eot)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'statics/fonts/',
              publicPath: '/fonts/',
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
      new ExtractTextPlugin({
        filename: 'statics/css/index.css',
      }),
      !isDev && new Webpack.optimize.UglifyJsPlugin({
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
      }),

    ].filter(Boolean),
    devServer: {
      disableHostCheck: true,
      publicPath: '/'
    }
  };
}

module.exports = init;
