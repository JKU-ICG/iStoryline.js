const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/static/simple11.html',
  filename: 'simple11.html',
  inject: 'body',
  chunks: ['simple11'],
})

module.exports = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: {
    simple11: ['./app/js/simple11.js'],
    complex11: ['./app/js/complex11.js'],
    complex5: ['./app/js/complex5.js'],
    demo: ['./app/js/demo.js'],
    simple5: ['./app/js/simple5.js'],
    complex16: ['./app/js/complex16.js'],
    simple16: ['./app/js/simple16.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'index_bundle.js',
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
  },
  devServer: {
	  publicPath: '/',
	  contentBase: "./",
	  hot: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: require.resolve('snapsvg'),
        use: 'imports-loader?this=>window,fix=>module.exports=0',
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  stats: { children: false },
  plugins: [
    HtmlWebpackPluginConfig,
    new HtmlWebpackPlugin({
      template: './app/static/complex11.html',
      filename: 'complex11.html',
      inject: 'body',
      chunks: ['complex11'],
    }),
    new HtmlWebpackPlugin({
      template: './app/static/simple5.html',
      filename: 'simple5.html',
      inject: 'body',
      chunks: ['simple5'],
    }),
    new HtmlWebpackPlugin({
      template: './app/static/demo.html',
      filename: 'demo.html',
      inject: 'body',
      chunks: ['demo'],
    }),
    new HtmlWebpackPlugin({
      template: './app/static/complex5.html',
      filename: 'complex5.html',
      inject: 'body',
      chunks: ['complex5'],
    }),
    new HtmlWebpackPlugin({
      template: './app/static/complex16.html',
      filename: 'complex16.html',
      inject: 'body',
      chunks: ['complex16'],
    }),
    new HtmlWebpackPlugin({
      template: './app/static/simple16.html',
      filename: 'simple16.html',
      inject: 'body',
      chunks: ['simple16'],
    }),
    new WebpackBar(),
  ],
}
