const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: ['./src/index.js', 'webpack/hot/dev-server'],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/build/',
    historyApiFallback: false,
    proxy: {
      context: ['/api', '/notes', '/testing'],
      target: 'http://localhost:8080/'
    }
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [new webpack.IgnorePlugin(new RegExp('^(fs|ipc)$'))]
}
