# 任务列表

- ts 配合 eslint 进行检测（finish）
- webpack 构建优化（缓存、多核、抽离、拆分）（https://blog.csdn.net/xiaolongbaobushibao/article/details/113606097）
  + 手动
    + babel-loader 开启缓存（webpack5内置 cache 功能）
    + 忽略打包、按需加载：IngorePlugin
    + 不解析代码：exclude
    + happyPack：多线程打包
    + 提取公共代码和第三方代码
    + 运用 CDN
    + 文件名称使用 内容hash
    + 懒加载
    + 图片引用（设定阀值，根据文件大小选择 base64 格式或者 url 引入）
    + webpack-bundle-analyzer：可视化分析
  + 自动带有
    + 代码压缩
    + tree-shaking
    + 作用域提升（函数调用）

# 前端项目配置

## webpack 相关

### 基础

```
包模块：webpack、webpack-cli
执行命令：webpack
```

### 热更新

```
包模块：webpack-dev-server（热更新所需依赖）
对应配置：webpack config => devServer
执行命令：webpack serve
```

### 环境变量

```
包模块：cross-env（能够解决 window、MacOS 系统变量的差异问题）
作用：用于设置 webpack 的 mode 和引入对应的 webpack 不同环境的配置
执行命令：cross-env NODE_ENV=dev
获取方式：process.env.NODE_ENV
```

### loader 配置

```
ts-loader：处理 ts 文件

babel-loader：处理 js 文件

postcss：处理 css 文件

url-loader：处理资源文件（可有效分离文件）

vue-loader：处理 vue 文件（需配合插件：VueLoaderPlugin）（vue3架构，vue-loader必须引入16版本，并搭配 @vue/compiler-sfc 使用）（vue-loader 16 版本前是搭配 vue-template-compiler）
```

### 别名配置

```
@: 配置为 src/
```

### 打包工具

```
progress-bar-webpack-plugin: 打包时生成进度条
```

## TypeScript 相关

## ESlint

webpack嵌入：
+ eslint-webpack-plugin（webpack插件）: 在编译时对文件进行eslint检测（之前使用的是 eslint-loader ）

核心：
+ eslint-plugin-prettier（插件）: 详细检测语法并将单个问题详细报告
+ plugin:vue/vue3-essential（扩展规则）: 依赖于 eslint-plugin-vue 包（官方的用于 Vue.js 的 ESLint 插件）
+ @typescript-eslint/parser（编译）: 处理TS文件编译

vue-cli扩展规则：
+ plugin:vue/vue3-essential
+ eslint:recommended
+ @vue/typescript/recommended
+ @vue/prettier
+ @vue/prettier/@typescript-eslint


### 配置文件

# 包模块

- webpack5
  - webpack
  - webpack-cli
  - webpack-dev-server
  - webpack-merge
  - html-webpack-plugin
- Vue 相关资源
  - @vue/compiler-sfc（Vue3 使用该包编译 vue 文件，Vue2 使用 vue-template-compiler）
  - vue-loader（需要安装 16 版本）
  - vue-style-loader：vue 解析单页面使用
- postcss
  - postcss-loader
  - precss：囊括了许多插件来支持类似 Sass 的特性，比如 CSS 变量，套嵌，mixins 等。
  - autoprefixer：添加了 vendor 浏览器前缀，它使用 Can I Use 上面的数据
- TypeScript
  - tsconfig.json：配置使用的是 vue3 提供的配置
- 资源处理
  - css-loader：会对 css 中 `@import` 和 `url()` 进行处理，就像 js 解析 `import/require()` 一样。
  - style-loader：向 DOM 中注入 CSS。
  - url-loader：未超过 limit 值，则直接将资源转 base64（file-loader 的操作）。超过 limit 值，则将资源使用引入的方式引入（url-loader 封装了 file-loader）
- 代码规范
  - eslint（未配置完成）
