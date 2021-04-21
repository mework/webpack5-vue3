/**
 * @description webpack生产环境配置
 */

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
  ]
}