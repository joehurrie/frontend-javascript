const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const currentFolder = path.basename(__dirname); // e.g., 'task_0'

module.exports = {
  entry: './js/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: `ALX ${currentFolder.replace('_', ' ')}`,
      template: './template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
