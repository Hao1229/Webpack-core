const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./src/scss/_variable.scss";'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[ext]',
              limit: 20000
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
