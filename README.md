
- [1. Javascript模块化规范](#1-javascript模块化规范)
  - [1.1. 前端引入模块化的原因与进程](#11-前端引入模块化的原因与进程)
  - [commonJS](#commonjs)
- [2. Webpack使用指南](#2-webpack使用指南)
  - [2.1. webpack 5 core concept:](#21-webpack-5-core-concept)
  - [2.2. webpack 引入打包好的文件方式：](#22-webpack-引入打包好的文件方式)

## 1. Javascript模块化规范
当前js三大模块化规范：commonJS(node.js依赖与commonJS规范)、AMD、ES6

### 1.1. 前端引入模块化的原因与进程
- 远古时期：所有js写在一个js文件，文件内部的高耦合和高复杂度导致极低的可维护性以及可读性。也就是说，当需求不断的迭代，越来越多
的代码被添加入一个js文件里。当打到一定量级，比如10万行代码的文件，对于代码维护和功能更新的developer来讲，查找一行代码都是耗时的。

- 简易封装：由于远古模式的痛点，聪明的程序猿们将一个js文件拆分成不同js文件（namespace模式），初步解决了结构上的高耦合。But, 简易的
封装在调用时会产生变量污染。由于js原始态没有封装的概念，当一个js文件调用另一个js文件的function时传参，会使这个另一个js文件的function的
内部变量变为传入的参数。这个问题对于全局变量更为突出。

- IIFE的出现: 于是IIFE出现了，IIFE是闭包的,长这样(func(moduel){export})(moduel)。通过IIFE这种闭包模式，使用依赖注入的方法解决了变量污染的问题。所以IIFE是所有模块化规范的基石。IIFE第一个括号是通过函数的方式将变量封装，然后再添加需要暴露的export。第二个括号是暴露的moduel调用方式。这里用jqury的封装模式作为例子。注释：依赖注入就是将第二个括号作为实参，第一个括号function的参数作为形式参数。
    ```
    //w作为window的形参，注入进当前IIFE
    (function(w))({
        function foo( name ){
            document.getElementById( name )
        };
        w.$ = {foo}; //外部使$调用foo函数拿到对应id的值，比如$('root')
    })(window) //jQury依赖于window的操作，window才是我们上面函数的实际调用的参数
    ```
- 模块规范化：虽然IIFE解决了变量污染的问题，但是如果没有规范的话，当我们有很多js文件时，我们一个html文件会引入大量的js。因此规范化是最终解耦的关键。

### commonJS
- 特点：每个文件都是视作一个模块，服务器端所有模块都是同步加载，浏览器端需要提前打包处理。由于浏览器端需要打包，commonJS规范不适用于前端，因为如果某一个js文件打包失败都会导致404。
- 基本语法：
  - i. 暴露模块：module.exports = value / exports.xxx = value, 不同点在于多暴露时的方式不一样，前者要把多暴露包装成一个暴露而后者可以直接通过命名进行多暴露;
  - ii. 引入模块：require(xxx)
- 实现：
  - i. 服务器端: node.js方式
  - ii. 浏览器端: Browserify

## 2. Webpack使用指南
官方指南: https://webpack.docschina.org/guides/

- wepack关键依赖: 
    ```
        npm install webpack webpack-cli --save-dev
    ```

### 2.1. webpack 5 core concept:
- Entry: 入口文件 （从哪里读入）
- Output：出口文件 （bundle的文件写入哪里）
- Loader: webpack只能读写js文件/json文件，对于css或者img需要loader进行翻译(less配置)
- Plugins：外部插件，例如jQuery，Bootstrap4, 图片压缩 等
- Mode: 使用者模式，两种，production和development，production会多一个压缩函数在buit.js中，是webpack内置的模式

    
### 2.2. webpack 引入打包好的文件方式：
- 在build文件夹下的html引入打包好的script文件,当前是是built.js，
- 检查是否已经引入通过检查打包好的script文件,当前是是built.js，中的底部查看