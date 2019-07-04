const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
}

mix
    .react('resources/js/image-manager/index.js','public/js' )
    // .js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css')
    .browserSync({
        host: 'www.laravelreact.test',
        port: 3000,
        proxy: {
            target: 'http://www.laravelreact.test',
        }
    });


    mix.version();