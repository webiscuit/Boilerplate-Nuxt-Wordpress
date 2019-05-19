import pkg from './package'
import webpack from 'webpack'
import path from 'path';

const site_name = 'Set Site Name Here'
const def_description = 'Set Description Here'
const def_url = 'Set Url Here'
const def_ogimage = 'Set OG Image Here'
const viewport = 'width=device-width,user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0'

export default {
  mode: 'universal',

  /* 
   ** Global variables
   */
  env: {
    site_name: site_name,
    site_url: def_url
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    bodyAttrs: {
    },
    titleTemplate: '%s｜def_title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: viewport },
      { hid: 'description', name: 'description', content: def_description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: def_url },
      { hid: 'og:title', content: site_name },
      { hid: 'og:description', property: 'og:description', content: def_description },
      { hid: 'og:image', property: 'og:image', content: def_ogimage },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/style.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],


  resolve: {
    alias: {
      'Assets': path.resolve(__dirname, 'assets')
    }
  },
  
  /*
   ** Build configuration
   */
  build: {
    // quiet: true,
    extractCSS: true,
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].css',
      img: () => '[path][name].[ext]',
      video: () => '[path][name].[ext]'
    },
    maxChunkSize: 300000,

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
