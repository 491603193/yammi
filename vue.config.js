module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项
    devServer: {
        port: 8081, // 端口号
        host: '192.168.0.199',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://192.168.0.199:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    },
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    css: undefined,
    lintOnSave: false,
    assetsDir: undefined,
    runtimeCompiler: true, //包含运行时编译器的 Vue 构建版本
    parallel: undefined

};