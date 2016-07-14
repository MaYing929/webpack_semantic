/**
 * Created by my on 16/7/14.
 */
var webpack = require('webpack')
var _dirname = './'

module.exports = {
    entry:'./entry.js',
    output:{
        path:_dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins:[
        new webpack.BannerPlugin('This file is created by maying')
    ]
}