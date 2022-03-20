
- [1. **Javascript模块化规范**](#1-javascript模块化规范)
  - [1.1. *前端引入模块化的原因与进程*](#11-前端引入模块化的原因与进程)
  - [1.2. *CommonJS*](#12-commonjs)
  - [1.3. *AMD(Asynchronous Module Definition)*](#13-amdasynchronous-module-definition)
  - [1.4. *ES6*](#14-es6)
- [2. **Webpack使用指南**](#2-webpack使用指南)
  - [2.1. *webpack 5 core concept:*](#21-webpack-5-core-concept)
  - [2.2. *webpack 引入打包好的文件方式：*](#22-webpack-引入打包好的文件方式)

## 1. **Javascript模块化规范**
- 当前js三大模块化规范：commonJS(node.js依赖与commonJS规范)、AMD、ES6。
- 为什么Javascript模块化规范是重要的？
  - Javascript模块化规范是很多前端打包工具比如webpack(REACT), Gulp(工作流), Rollup(VUE)以及流行库(REACT, VUE, AngularJS)的基础原理。了解了基础原理有助于应对一些莫名其妙的bug或者快速适应用一些新出现的JS库。有益无害。

### 1.1. *前端引入模块化的原因与进程*
- 远古时期：所有js写在一个js文件，文件内部的高耦合和高复杂度导致极低的可维护性以及可读性。也就是说，当需求不断的迭代，越来越多
的代码被添加入一个js文件里。当打到一定量级，比如10万行代码的文件，对于代码维护和功能更新的developer来讲，查找一行代码都是耗时的。

- 简易封装：由于远古模式的痛点，聪明的程序猿们将一个js文件拆分成不同js文件（namespace模式），初步解决了结构上的高耦合。But, 简易的
封装在调用时会产生变量污染。由于js原始态没有封装的概念，当一个js文件调用另一个js文件的function时传参，会使这个另一个js文件的function的
内部变量变为传入的参数。这个问题对于全局变量更为突出。

- IIFE的出现: 于是IIFE出现了，IIFE是闭包的,长这样(func(moduel){export})(moduel)。通过IIFE这种闭包模式，使用依赖注入的方法解决了变量污染的问题。所以IIFE是所有模块化规范的基石。IIFE第一个括号是通过函数的方式将变量封装，然后再添加需要暴露的export。第二个括号是暴露的moduel调用方式。这里用jqury的封装模式作为例子。注释：依赖注入就是将第二个括号作为实参，第一个括号function的参数作为形式参数。
    ```
    //w作为window的形参，注入进当前IIFE
    (function(w){
        function foo( name ){
            console.log( name )
        };
        w.$ = {foo}; //将$绑定到window上，外部使$调用foo函数，window.$.foo('name')
    })(window) //这里依赖于window绑定参数，window才是我们上面函数的实际调用的参数
    ```
- 模块规范化：虽然IIFE解决了变量污染的问题，但是如果没有规范的话，当我们有很多js文件时，我们一个html文件会引入大量的js。因此规范化是最终解耦的关键。下面举个例子进行解释：
    ```
    //模块1,通过window暴露
    (function(w){
      let name = 'dataServer.js';
      function getName(){
        return name;
      }
      w.dataServer = {getGame};
    })(window)

    //模块2,通过window暴露,并依赖与模块1
    (function(w,ds){
      let msg = 'alter.js';
      function showMsg(){
        console.log(msg, ds.getName())
      }
      w.module2 = {showMsg};
    })(window, dataServer)

    //主模块，暴露给html并引入模块2（因为模块2依赖于模块1所以不用引入模块1）
    (function(m2){
      m2.showMsg();
    })(module2)

    <!-- 但是由于有三个js，所以html文件要引入三个js文件并且顺序要正确 -->
    <script type="text/javascript" src="./模块1"></script>
    <script type="text/javascript" src="./模块2"></script>
    <script type="text/javascript" src="./主模块"></script>
    ```

### 1.2. *CommonJS*
- 特点：每个文件都是视作一个模块，服务器端所有模块都是同步加载，浏览器端需要提前打包处理。由于浏览器端需要打包，commonJS规范不适用于前端，因为如果某一个js文件打包失败都会导致404。
- 基本语法：
  - i. 暴露模块：module.exports = value / exports.xxx = value, 不同点在于多暴露时的方式不一样，前者要把多暴露包装成一个暴露而后者可以直接通过命名进行多暴露;
  - ii. 引入模块：require(xxx)
- 实现：
  - i. 服务器端: node.js方式
  - ii. 浏览器端: Browserify  （全局局部都要安装一次）
      ```
      npm install browserify -g
      npm install browserify --save-dev
      ```
      运行命令
      ```
      browserify 主js路径 -o 打包生成路径(一般在dist/built文件路径下) 
      ```

### 1.3. *AMD(Asynchronous Module Definition)*
- 特点：异步加载，一般使用于浏览器端
- 基本语法：
  - i. 暴露模块: 
    - ```define(function(){return moduel})```,没有依赖通过return暴露。
    - ```define(['module1', 'module2'], function(m1, m2){return moduel})```, 有依赖模块注入, 通过return返回暴露。
  - ii. 引入模块: 
    - ```require(['module1', 'module2'], function(m1, m2){use m1, m2})```, 通过依赖注入引入模块, AMD官网给出的例子要用IFEE包裹require。
  - iii. 第三方库引入的注意事项
    - 第三方库依赖注入时，要注意第三方库有没有内部定义对AMD支持。以Jquery为例，它是支持AMD并定义了AMD模式下的引入模式是小写的'jquery'。要用定义好的名字去引入。如果第三方库不支持amd模式比如AngularJS,就要单独配置。
  - 以上面的为什么模块化规范代码为基础进行AMD改写
    ```
    //模块1
    define(function(){
      let name = 'dataServer.js';
      function getName(){
        return name;
      }
      return {getGame};
    });

    //模块2，这里array里是不同模块文件名，可以是任何一个名字指向模块1，但是jquery是第三方声明，我们必须遵守.
    define(['dataServe', 'jquery'],function(ds, $){
      let msg = 'alter.js';
      function showMsg(){
        console.log(msg, ds.getName())
      }
      $('body').css('backgournd', 'pink');
      return {showMsg()};
    });

    //主模块
    (function(){
      //配置路径
      requirejs.config({
        baseUrl: 基本路径,比如模块1和模块2都来自, 那么基本路径就是'./src/',
        paths: { //子路径，配置路径，表明js执行顺序和相关js位置
          dataService: '模块1路径',
          module2: '模块2路径',
          jquery: 'jquery路径'//注意要小写
          angular: 'angular路径'
        }
        shim: {//不支持AMD第三方库配置
          angular: {
            exports: 'angular'
          }
        }
      })

      requirejs(['module2', 'angular'], function(m2){
        m2.showMsg();
        console.log('angular');
      })
    })()

    <!-- html引入入口文件官方要求配置 -->
    <script data-main="主模块路径" src="require.js所在路径"></script>
    ```
- 实现： 
  - 浏览器端: Require.js

### 1.4. *ES6*
- 特点: 非常popular, 广泛性。ES6都需要编译打包(浏览器识别ES5, 打包将ES6转换为ES5)。
- 基本语法：(简单粗暴)
  - 暴露模块: export (不是exports, exports是commonJS)
  - 引入模块: import
- 实现：
  - 浏览器端: 
    - 使用babel将ES6转换成ES5, 需要安装babel的cli来操作babel内部库(JSX语义转换)
    - 使用browerify
    ```
    npm install babel-cli browserify -g
    npm install babel-preset-es2015 --save-dev
    ```

## 2. **Webpack使用指南**
官方指南: https://webpack.docschina.org/guides/

- wepack关键依赖: 
    ```
        npm install webpack webpack-cli --save-dev
    ```

### 2.1. *webpack 5 core concept:*
- Entry: 入口文件 （从哪里读入）
- Output：出口文件 （bundle的文件写入哪里）
- Loader: webpack只能读写js文件/json文件，对于css或者img需要loader进行翻译(less配置)
- Plugins：外部插件，例如jQuery，Bootstrap4, 图片压缩 等
- Mode: 使用者模式，两种，production和development，production会多一个压缩函数在buit.js中，是webpack内置的模式

    
### 2.2. *webpack 引入打包好的文件方式：*
- 在build文件夹下的html引入打包好的script文件,当前是是built.js，
- 检查是否已经引入通过检查打包好的script文件,当前是是built.js，中的底部查看