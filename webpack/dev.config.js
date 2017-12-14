const merge = require('webpack-merge');
const baseConfig = require('./base.config');

devConfig = {
    devtool : 'eval-source-map',

    devServer : {
        inline : true,
        port : 1234
    },
    
}

module.exports = merge(baseConfig,devConfig);