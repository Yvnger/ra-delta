const path = require('path');

module.exports = {
  entry: './src/ts/main.ts', // Основной файл вашего JavaScript
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  mode: 'development', // Или 'production' в зависимости от вашего окружения
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js')
  },
};
