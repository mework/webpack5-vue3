/**
 * @description webpack 配置文件
 */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { VueLoaderPlugin } = require('vue-loader');
const { resolve } = require('path');

const modeEnv = process.env.NODE_ENV;
const webpackEnvConfig = require(`./config/webpack.${modeEnv}.js`);

module.exports = merge(webpackEnvConfig, {
  mode: modeEnv === 'dev' ? 'development' : 'production',
  // 处理热更新问题
  target: modeEnv === 'dev' ? 'web' : 'browserslist',
  entry: {
    app: './src/main.ts',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    // 防止 webpack 解析那些任何与给定正则表达式相匹配的文件
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,

    rules: [
      // ts-loader (处理ts文件)
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      // babel-loader (处理js文件)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // url-loader (处理png、jpg、gif文件)
      {
        test: /\.(png|jpg|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // vue-loader (处理vue文件)
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      // 将普通css文件当做postcss处理
      // 处理 style lang="postcss"
      {
        test: /\.(post)?css$/,
        exclude: /node_modules/,
        use: [
          // 基于style-loader，用于标记并动态注入文档（默认会在 vue-loader 中使用）
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // 用于配置【css-loader 作用域 @import 的资源之前】有多少个 loader （资料：https://zhuanlan.zhihu.com/p/94706976）
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    // 添加 .ts、.tsx 扩展
    extensions: ['.ts', '.tsx', '.js', '.vue'],
    // 配置别名
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    // 处理vue的插件
    new VueLoaderPlugin(),

    // 作用：这个 webpack 插件会在一个单独的进程并行的进行 TypeScript 的类型检查
    new ForkTsCheckerWebpackPlugin({
      // ts 的扩展
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler: '@vue/compiler-sfc',
          },
        },
        diagnosticOptions: {
          semantic: true,
          syntactic: false,
        },
      },
    }),

    // HTML处理
    new HtmlWebpackPlugin({
      title: '文档标题',
      template: './public/index.html',
      inject: 'body',
    }),
  ],
});
