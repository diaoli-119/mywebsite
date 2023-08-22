const path = require('path');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出路径
    publicPath: '/' // 公共路径，通常用于部署到服务器的子目录
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // 使用babel-loader处理JS/JSX文件
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // 处理CSS文件
      }
    ]
  },
  devServer: {
    historyApiFallback: true // 用于处理BrowserRouter的路由
  }
};
