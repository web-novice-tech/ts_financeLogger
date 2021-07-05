const path = require('path');
const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  resolve: {
    extensions: ['.js', '.ts'],
    // modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.scss$/,
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap
            },
          }
        ],
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}