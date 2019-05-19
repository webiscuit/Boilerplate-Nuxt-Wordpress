import webpack from 'webpack';
import path from 'path';

const env = process.env.NODE_ENV;
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

const srcpath = './assets/';
const csspath = './style.css';
const outputpath = './public/wp-content/themes/sample/assets/';

module.exports = env => {
  const mode = (env && env.production) ? 'production' : 'development';

  return {
    mode: mode,
    devtool: (mode == 'production') ? false : 'source-map',
    entry:  path.resolve(__dirname, srcpath + 'index.js'),
    output: {
      path: path.resolve(__dirname, outputpath),
      filename: 'app.js'
    },
    devServer: {
      clientLogLevel  : 'none',
    },
    stats: {
      children: false,
      hash: false,
      warnings: false,
      performance: false,
      modules: false,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:{
            presets: ['@babel/preset-env']
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/,
          loader: 'url-loader',
          query: {
            limit: 1000, // 1kB
            name: 'img/[name].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 1000, // 1kB
            name: 'fonts/[name].[ext]'
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
            { loader: 'css-loader', options: {
              importLoaders: 1,
              url: true,
              sourceMap: (env && env.production) ? false : true,
            } },
            { loader: 'postcss-loader', options: {
              ident: 'postcss',
              sourceMap:  (env && env.production) ? false : true,
            } },
            { loader: 'sass-loader', options: {
              sourceMap:  (env && env.production) ? false : true,
            } }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        'assets': path.resolve(__dirname, 'assets')
      },
      extensions: ['.js', '.jsx']
    },
    optimization: {
      minimizer: [
        new TerserJSPlugin({ extractComments: false }),
        new OptimizeCssAssetsPlugin({
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          }
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: csspath
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new ImageminPlugin({
        disable: !env.production,
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: { quality: '80' },
        plugins: [
          imageminMozjpeg( {quality: '80'} )
        ]
      })
    ],
    performance: { hints: false }
  }
};
