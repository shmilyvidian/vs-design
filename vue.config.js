const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  configureWebpack: {
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    },

    resolve: {
      alias: {
        // '@': resolve('examples'),
        // 'packages': resolve('packages'),
        // 'utils': resolve('utils')
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('packages', resolve('packages'))
      .set('utils', path.resolve(__dirname, './utils'))

    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
   
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('./build/md-loader/index.js')
      .loader('./build/md-loader/index.js')
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
