const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    configureWebpack: {
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        mangle: { reserved: ['$super'] },
                    },
                }),
            ],
        },
    }
}
