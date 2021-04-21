# 任务列表

+ ts 检测
+ eslint 配合使用
+ webpack 性能监控与优化

# 问题点

+ .browserslistrc 文件会导致 webpack 热更新失效
  + 问题前因：在构建基础结构的过程中，添加了css预处理器 postcss，并且配置了 autoprefixer 自动加入浏览器前缀插件，该插件使用 browserslist 数据进行匹配对应的浏览器进行匹配是否加入浏览器前缀，配置对应的 browserslist 后，运行一切正常，打包后的样式也生成了对应的前缀
  + 发现问题：配置后，在后续开发环境却发现了另一个问题，开发环境下，webpack-dev-serve 热更新失效了，通过排查，loader =》 plugin 等配置，最终确定问题原因来自 browserslist 文件
  + 解决问题：当删除 .browserslistrc 时，HRM 热更新即可生效，但是 autoprefixer 插件需要依赖于 .browserslistrc 文件进行前缀生成，所以不能删除他，接着我就去到 github 社区，找到 webpack-dev-server 插件提 issue，最终得到解决方案，原因是配置了 .browserslistrc 之后，webpack-dev-server 没有将环境视为浏览器环境，故而取消了 HRM 热更新功能，解决方案：强行执行开发环境 Target 目标，最后通过将开发环境 Target 目标设置为 browser，将生产环境再设置为 browserlist 就解决了该问题



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


## TypeScript 相关

### 配置文件

# 包模块
+ webpack5
  + webpack
  + webpack-cli
  + webpack-dev-server
  + webpack-merge
  + html-webpack-plugin
+ Vue相关资源
  + @vue/compiler-sfc（Vue3 使用该包编译 vue 文件，Vue2 使用 vue-template-compiler）
  + vue-loader（需要安装 16 版本）
  + vue-style-loader：vue 解析单页面使用
+ postcss
  + postcss-loader
  + precss：囊括了许多插件来支持类似 Sass 的特性，比如 CSS 变量，套嵌，mixins 等。
  + autoprefixer：添加了 vendor 浏览器前缀，它使用 Can I Use 上面的数据
+ TypeScript
  + tsconfig.json：配置使用的是 vue3提供的配置
+ 资源处理
  + css-loader：会对css中 `@import` 和 `url()` 进行处理，就像 js 解析 `import/require()` 一样。
  + style-loader：向 DOM 中注入 CSS。
  + url-loader：未超过limit值，则直接将资源转base64（file-loader的操作）。超过limit值，则将资源使用引入的方式引入（url-loader封装了file-loader）
+ 代码规范
  + eslint（未配置完成）

