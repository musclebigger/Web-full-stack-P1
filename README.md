# webpack 使用指南（webpack.config.js）
    webpack 5 core concept:
        1. Entry: 入口文件 （从哪里读入）
        2. Output：出口文件 （bundle的文件写入哪里）
        3. Loader: webpack只能读写js文件/json文件，对于css或者img需要loader进行翻译
        4. Plugins：外部插件，例如jQuery，Bootstrap4, 图片压缩 等
        5. Mode: 使用者模式，两种，production和development，production会多一个压缩函数在buit.js中
    
    webpack 引入打包好的文件方式：
        在build文件夹下的html引入打包好的script文件,当前是是built.js，
        检查是否已经引入通过检查打包好的script文件,当前是是built.js，中的底部查看