const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        apps: path.join(__dirname, 'src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"main.js"
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hotOnly: true,
        port: 3000,
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                loader:'babel-loader',
                options:{
                    presets: [
                        "@babel/react"
                    ]
                }
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[new htmlWebpackPlugin({
        template:path.join(__dirname,'./public/index.html'),
        filename: 'index.html'
    })
    ],
}
