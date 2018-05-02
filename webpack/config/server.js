const Webpack = require( 'webpack' );
const Path = require( 'path' );
const NodeExternals = require( 'webpack-node-externals' );

const isDev = ( process.env.NODE_ENV !== 'production' );

const init = ( dir ) => {
  return {
    bail: !isDev,
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    target: 'node',
    entry: Path.join( dir, '/src/server/index.js' ),
    output: {
      path: Path.join( dir, 'build' ),
      filename: 'server.js',
      publicPath: '/',
    },
    externals: [
      NodeExternals()
    ],
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
          test: /\.css$/,
          use: [
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|ico)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'statics/images/',
              publicPath: '/statics/images/',
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
      )
    ],
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
      setImmediate: false
    }
  }
}

module.exports = init;
