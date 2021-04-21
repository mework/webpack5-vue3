/**
 * @description webpack生产环境配置
 */
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    // 清除之前构建的文件
    new CleanWebpackPlugin(),

    // 复制 public 内容到 dist 中
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, '../public'),
          to: resolve(__dirname, '../dist'),
          globOptions: {
            // 排除 index.html 和 DS_Store
            ignore: ['**/index.html', '**/.DS_Store'],
          },
        },
      ],
    }),
  ],
};
