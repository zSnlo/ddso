// console.log(process.env.NODE_ENV)
// process.env 可以获取当前运行环境的参数
// development  开发环境  production  运行环境 

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? 'https://zsnlo.github.io/ddso/': '/',
  outputDir:'docs',//默认dist 打包生成的 文件夹  --no-clean 关闭打包前删除dist文件成操作
  //从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略
  assetsDir: '', // 静态资源目录 (js, css, img, fonts)
  // assetsPublicPath:'/',
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // indexPath:'index.html',

  devServer: {
  //   host:'0.0.0.0',//地址
  //   port:'8090', //项目启动的端口号
  //   // https:'',
  /* 自动打开浏览器 */
  //   open: true,
  /* 使用代理 */
      proxy: { // string | Object
        // '/api': {
            /* 目标代理服务器地址 */
            // target: 'http://xxx/',
            /* 允许跨域 */
            // changeOrigin: true,
            // pathRewrite: {
              // '^/api': '' //规定请求地址以什么作为开头
          // }
        // },
    },
  },

  // pages: { //在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字
  //   index: {
  //     // page 的入口
  //     entry: 'src/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   index: 'src/main.js',
  // },
}