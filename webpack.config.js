/**
 * webpack.config.js webpack 的配置文件
 * 作用：指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）
 * 所有构建工具都是基于node.js 平台运行的~模块化默认采用common.js
 */

// resolve 用来拼接绝对路径的方法
const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js', // 入口
    output: {
        filename: '[hash].bundle.js', // 输出文件名
        path: resolve(__dirname, './dist'), // _dirname node.js变量，代表当前目录的绝对路径
    },
    plugins: [
        // html-webpack-plugin
        // 功能：默认会创建一个空的HTML,自动引入打包输出的所有资源(JS/CSS)
        // 需求：需要有结构的HTML文件
        new HtmlWebpackPlugin({
            // 复制 index.html 文件，并自动引入打包输出的所有资源(JS/CSS)
            template: 'index.html'
        }),
    ]
};

