const path = require('path');
 
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      { 
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: '[name]-[hash:6].[ext]',
               outputPath: 'img'
            }
          }
        ]
      },
      { 
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
               outputPath: ''
            }
          }
        ]
      }
    ]
  }
}