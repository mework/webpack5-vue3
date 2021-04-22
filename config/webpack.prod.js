/**
 * @description webpack生产环境配置
 */
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  plugins: [
    // 生成构建进度
    new ProgressBarPlugin(),

    // 清除之前构建的文件
    new CleanWebpackPlugin(),

    // 复制 public 内容到 dist 中
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, '../public'),
          to: resolve(__dirname, '../dist'),
          // 关闭报错（当只有一个 index.html 文件的时候会报错）
          noErrorOnMissing: true,
          globOptions: {
            // 排除 index.html 和 DS_Store
            ignore: ['**/index.html', '**/.DS_Store'],
          },
        },
      ],
    }),
  ],
};
