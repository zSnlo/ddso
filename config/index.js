'use strict';
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
  lintOnSave: false, //关闭eslink
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/hnvmns-site': {
      //   target: 'http://192.168.0.168:8080',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/hnvmns-site': ''
      //   }
      // },
      // '/hnvmns-emergency': {
      //   target: 'http://192.168.0.168:8081',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/hnvmns-emergency': ''
      //   }
      // },
      // '/hngdPushServer': {
      //   target: 'http://192.168.0.165:8881',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/hngdPushServer': ''
      //   }
      // },
      // '/hnvmns-accident': {
      //   target: 'http://192.168.0.168:8892',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/hnvmns-accident': ''
      //   }
      // },
      // '/train': {
      //   target: 'http://192.168.0.163:8090',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/train': ''
      //   }
      // },
      '/edu_train': {
        target: 'http://192.168.0.158:8090',
        changeOrigin: true,
        pathRewrite: {
          '^/train': ''
        }
        },
      // '/regulations': {
      //   target: 'http://192.168.0.158:8089',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/regulations': ''
      //   }
      // },
      '/tar_res': {
        target: 'http://192.168.0.158:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/tar_res': ''
        }
      },
      // '/hnvmns-user-center': {
      //   target: 'http://192.168.0.165:9256',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/hnvmns-user-center': '/'
      //   }
      // },
    },

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8090, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
