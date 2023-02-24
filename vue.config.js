var path = require('path');

module.exports = {

    // для установки относительного пути в assets, вместо глобального
    // publicPath: '',

    // отключение хэшей в именах файлов
    filenameHashing: false,

    devServer: {
        proxy: {
            "/api/*": {
                target: "http://localhost:3000",
                secure: false
            }
        }
    },

    css: {
        loaderOptions: {
            scss: {
                // additionalData: `@import "@/assets/styles/_variables.scss";`
            }
        }
    },

    configureWebpack: {
        module: {
            rules: [

            ]
        },
        plugins: [

        ]
    },

    chainWebpack: config => {
        // uncomment on PRODUCTION
        config.plugin('copy').tap(([options])=> {
            options[0].ignore.push('**/sass/**');
            return [options]
        });

        // удаление плагинов webpack связанных с HTML
        //    config.plugins.delete('html')
        //    config.plugins.delete('preload')
        //    config.plugins.delete('prefetch')
    },


};