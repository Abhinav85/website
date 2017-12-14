const merge = require('webpack-merge');
const baseConfig = require('./base.config');

prodConfig = {
    output :  {
        path : __dirname + '/../public',
        filename : 'bundle.js'
    }
}

module.exports = merge(baseConfig,prodConfig);
