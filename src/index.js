// webpack entry的起点文件，
// cli两个运行指令可以使用：1，开发环境 webpack ./src/index.js -o ./build/built.js --mode=development
//                            cli指定代表这，webpack打包从index.js输出到built.js
//                          2，开发环境 webpack ./src/index.js -o ./build/built.js --mode=production
//                            cli指定代表这，webpack打包从index.js输出到built.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = (
    <div className="border">
        <h1>HELLO</h1>
    </div>
)
ReactDOM.render(App,document.getElementById("root"));
