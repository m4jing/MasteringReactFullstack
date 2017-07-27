const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.js'
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
    // contentBase: './dist',
    contentBase: path.join(process.cwd(), 'dist'),
    port: 3000,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ]
        }
      }
    ]
  }
}
