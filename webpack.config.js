/**
 * Created by SWSD on 2016-12-20.
 */
var path = require('path');

module.exports = {
    entry: './src/app',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.(png|jpe?g|gif|svg)/,
                loader: 'url',
                query: {
                    limit: 10240, // 10KB 以下使用 base64
                    name: 'img/[name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass?sourceMap"
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }],
    },
    devtool: 'source-map'
}