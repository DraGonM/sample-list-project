const Webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const Config = require('webpack-config').default

const inlineSettings = [
  new HtmlWebpackPlugin({
    template: 'index.html', 
    favicon: 'favicon.ico',
    inlineSource: '.(js|css)$' // embed all javascript and css inline
  }),
  new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
]

module.exports = new Config().extend('./configs/webpack.config.js').merge({
  mode: 'production',
  entry: ['./src/index'],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
          default: false,
          vendors: false,
          // vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          // common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'async',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
      },
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[contenthash].css"
    }),
    new Webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(ru)$/),
    // if wanna disable inline to html, just disable next string
    ...inlineSettings,
  ],
  devtool: 'source-map',
})
