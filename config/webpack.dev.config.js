var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './../src/main.js'
    ],
    output: {
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel?' + JSON.stringify({
                // react-optimize ---> https://github.com/thejameskyle/babel-react-optimize
                presets: ["react-optimize", "es2015", "stage-0", "react"],
                plugins: [
                    ["transform-decorators-legacy"],
                    ["transform-runtime", {"polyfill": false, "regenerator": true}]
                ]
            })]
        }]
    },
    watch: true
};