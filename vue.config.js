const path = require('path')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg|awebp)(\?.*)?$/i
const HappyPack = require('happypack')
const { HashedModuleIdsPlugin } = require('webpack')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}

let pluginsArr = [
    new SimpleProgressWebpackPlugin(),
    new HardSourceWebpackPlugin(),
    new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8
    })
]

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    transpileDependencies: [
        /[/\\]node_modules[/\\](.+?)?@photo-sphere-viewer[/\\]core(.*)/,
        /[/\\]node_modules[/\\](.+?)?@photo-sphere-viewer[/\\]autorotate-plugin(.*)/,
        /[/\\]node_modules[/\\](.+?)?@photo-sphere-viewer[/\\]gallery-plugin(.*)/,
        /[/\\]node_modules[/\\](.+?)?@photo-sphere-viewer[/\\]markers-plugin(.*)/
    ],
    configureWebpack: config => {
        let plugins = []
        let module = {}
        if (isProduction) {
            plugins = [].concat(pluginsArr)

            // 开启分离js
            config.optimization = {
                runtimeChunk: 'single',
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        terserOptions: {
                            ecma: undefined,
                            warnings: false,
                            parse: {},
                            compress: {
                                drop_console: true,
                                drop_debugger: true,
                                pure_funcs: ['console.log'] // 移除console
                            }
                        },
                        // 代码压缩插件
                        parallel: 4, // 开启并行压缩
                        cache: true
                    })
                ]
            }

            // 取消webpack警告的性能提示
            config.performance = {
                hints: 'warning',
                // 入口起点的最大体积
                maxEntrypointSize: 1000000 * 500,
                // 生成文件的最大体积
                maxAssetSize: 10000000 * 1000,
                // 只给出 js 文件的性能提示
                assetFilter: function(assetFilename) {
                    return assetFilename.endsWith('.js')
                }
            }
        }

        return isProduction ? { plugins, module } : { plugins }
    },

    css: {
        sourceMap: process.env.NODE_ENV !== 'production',
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/css/base.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@mixins', resolve('src/mixins'))
            .set('@store', resolve('src/store'))
        config.plugin('HappyPack').use(HappyPack, [
            {
                loaders: [
                    {
                        loader: 'babel-loader?cacheDirectory=true'
                    }
                ]
            }
        ])
        config.optimization.delete('splitChunks')
    },

    assetsDir: 'static',
    runtimeCompiler: true,
    productionSourceMap: false,
    outputDir: 'dist',
    devServer: {
        // host: 'localhost',
        port: 3000,
        https: false,
        hotOnly: false,
        proxy: { // 设置代理
            '/api': {
                target: 'http://10.18.1.104:17999', // 新环境地址开发
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': '' // 本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                }
            },

            // 图片服务代理
            '/imgServer': {
                // target: 'http://192.168.91.218:8081/', //需要代理的地址
                target: 'http://10.10.109.203:7699/', // 需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/imgServer': '' // 本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                }
            }
        }
    }

}
