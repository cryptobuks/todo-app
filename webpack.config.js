const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const svgStore = require('webpack-svgstore-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE || false;

const config = {
    devtool: isProd ? false : 'cheap-module-source-map',
    entry: {
        app: [path.resolve(__dirname, 'src/index'), path.resolve(__dirname, 'src/polyfills')]
    },
    output: {
        filename: isProd ? 'static/js/[name].[chunkhash:8].js' : 'static/js/[name].js',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'initial',
        },
    },
    module: {
        rules: [
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
            },
            {
                loader: 'file-loader',
                exclude: [/\.js$/, /\.html$/, /\.json$/, /\.scss$/],
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            __DEV__: JSON.stringify(!isProd),
            // __REACT_DEVTOOLS_GLOBAL_HOOK__: isProd && '({})',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            alwaysWriteToDisk: true,
        }),
        new svgStore({
            svgoOptions: {
                plugins: [
                    {
                        removeTitle: true
                    }
                ]
            },
            prefix: ''
        })
    ],
    stats: {
        hash: false,
        version: true,
        children: false,
        modules: false,
    },
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        // By default files from `contentBase` will not trigger a page reload.
        watchContentBase: true,
        publicPath: '/',
        hot: true,
        host: process.env.HOST || '0.0.0.0',
        historyApiFallback: true,
        stats: 'errors-only',
        compress: true,
        overlay: {
            errors: true,
            warnings: false,
        },
        watchOptions: {
            ignored: [path.resolve(__dirname, 'node_modules')],
        },
    },
};

if (isAnalyze) {
    config.plugins.push(new BundleAnalyzerPlugin());
}

if (isProd) {
    config.plugins.push(new webpack.HashedModuleIdsPlugin());
} else {
    config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin());
}

module.exports = config;
