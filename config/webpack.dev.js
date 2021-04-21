/**
 * @description webpack开发环境配置
 */


module.exports = {
  devServer: {
    // 热更新
    hot: true,

    // 运行后自动打开浏览器
    open: true,

    // proxy代理接口
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}