const path = require('path');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}