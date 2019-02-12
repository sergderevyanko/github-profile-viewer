/**
 * Created by sergey.derevyanko on 08.02.19.
 */
const path = require('path');

module.exports = {
    mode: 'development',
    // devtool: 'sourcemaps',
    cache: true,
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: "app/js/main.js"
    },
    module: {
        rules: [
            {
                test: /j\.js|jsx?$/,
                exclude: '/(node_modules)/',
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
}