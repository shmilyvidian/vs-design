const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Components = require('./get-components')()
const entry = {}

Components.forEach(c => {
  entry[c] = `./packages/${c}/index.js`
})
// entry['vendor'] = ['element-ui', 'vue']
const webpackConfig = {
  mode: 'production',
  entry: entry,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd'
  },
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       name: 'commons',
    //       chunks: 'initial',
    //       minChunks: 2
    //     }
    //   }
    // }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  performance: {
    hints: false
  },
  stats: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.(png|jpe?g|gif|webp)(\?.*)$/,
        loader: 'url-loader',
        options: {
          esModule: false,
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
    
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}

module.exports = webpackConfig
