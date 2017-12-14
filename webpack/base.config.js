const webpack = require('webpack');

var baseConfig = {
    entry : './index.js',

    // output :  {
    //     path : '/',
    //     filename : 'bundle.js'
    // },

    // devServer : {
    //     inline : true,
    //     port : 1234
    // },

    // devtool : 'source-map',
    // watch : true,


    module : {
        loaders : [
            {
                test : /\.js?$/,
                exclude : /node_modules/,
                loader : 'babel-loader',

                query : {
                    presets : ['es2015','react']
                }
            },
            {
                test : /\.scss$/,
                exclude : /node_modules/,
                loaders : 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    plugins : [
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
        ]),
    ]
};

module.exports = baseConfig;