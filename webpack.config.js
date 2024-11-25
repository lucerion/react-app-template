import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        test: /\.(?:js|jsx)$/u,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/u,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
