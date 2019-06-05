/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Import
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-*/
import pkg from './package'
import webpack from 'webpack'
import path from 'path';
const imageminMozjpeg = require('imagemin-mozjpeg');



/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Use Global Variables
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-*/
require('dotenv').config(); // from .env


/* -∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-
  Settings
-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-∵-∴-*/
export default {
  dev: (process.env.NODE_ENV !== 'production'),
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    bodyAttrs: {
    },
    titleTemplate: '%s｜' + process.env.site_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: process.env.viewport },
      { hid: 'description', name: 'description', content: process.env.def_description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.def_url },
      { hid: 'og:title', content: process.env.site_name },
      { hid: 'og:description', property: 'og:description', content: process.env.def_description },
      { hid: 'og:image', property: 'og:image', content: process.env.def_ogimage },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#333' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/bootstrap-settings.scss',
    '@/assets/css/style.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/assets/js/script.js', mode: 'client' },  // Old-style Common JS
    // '~/plugins/vue-scrollto.js' // scroll
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    ["nuxt-imagemin", {
      pngquant: { quality: '80' },
      plugins: [
        imageminMozjpeg( {quality: '80'} )
      ]
    }]
  ],
    bootstrapVue: {
      bootstrapCSS: false,
      bootstrapVueCSS: false
    },

  /*
    ** Source Directory
    */
  srcDir: 'src/',
  
  /*
   ** Build configuration
   */
  build: {
    // quiet: true,
    fallback: false,
    publicPath: '/assets/',
    devtools: process.env.NODE_ENV === 'production',
    extractCSS:	process.env.NODE_ENV === 'production',
    // subFolders: false,
    filenames: {
      app: () => 'js/[name].js',
      chunk: () => 'js/[name].js',
      css: () => 'css/[name].css',
      img: () => 'img/[folder]/[name].[ext]',
      font: () => 'font/[name].[ext]'
    },

    /*
     ** You can extend webpack config here
     */
    extend(config) {
      // // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
