let mix = require('laravel-mix');

// Mix Extensions
require('mix-html-builder');

// Mix Configuration
mix.setPublicPath('public');
mix.setResourceRoot('assets');
// Mix Execution

mix.js('src/js/app.js', 'public/assets')
   .sass('src/scss/index.scss', 'public/assets')
   .version().sourceMaps().setPublicPath('public');
mix.html({
    htmlRoot: 'src/html/index.html',
    output: '.',
    inject: true,
    partialRoot: 'src/html/partials',
    layoutRoot: 'src/html/layouts',
    minify: {
        removeComments: true
    }
});
mix.copyDirectory('fonts', 'public/fonts');
mix.copyDirectory("assets", 'public/assets');