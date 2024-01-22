const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/trayton',  // 公共路径
    devServer: {
        proxy: {
            '/trayton/api': {
                target: 'http://localhost:8081',
                pathRewrite: {
                    '^/trayton/api': '/api'
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles/'))
            .set('@', path.join(__dirname, './src/'))
            .set('common', path.join(__dirname, './src/common/'))
            .set('images', path.join(__dirname, './src/assets/images/'))
    }
}
