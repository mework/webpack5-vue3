module.exports = {
  plugins: [
    // 囊括了许多插件来支持类似 Sass 的特性，比如 CSS 变量，套嵌，mixins 等。
    require('precss'),

    // 自动添加 vendor 浏览器前缀，它使用 Can I Use 上面的数据。（通过 Browserslist 进行配置）
    require('autoprefixer'),
  ]
}