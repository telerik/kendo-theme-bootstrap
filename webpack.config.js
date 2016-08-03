var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = require('@telerik/kendo-common-tasks')
    .webpackThemeConfig({ extract: true }, {
        module: { loaders: [] },
        entry: {
            main: './src/main.js'
        },
        plugins: [
            new BrowserSyncPlugin({
                watchOptions: {
                    ignored: '**/*.js'
                },
                server: true,
                open: false,
                host: '0.0.0.0',
                port: 3000
            })
        ],
        output: {
            publicPath: './dist/',
            path: './dist/',
            filename: '[name].js'
        }
    });

