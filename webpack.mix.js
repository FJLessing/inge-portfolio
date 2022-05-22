let mix = require('laravel-mix');

// Mix Extensions
require('mix-html-builder');
require('laravel-mix-webp')

// Mix Configuration
mix.setPublicPath('public');
mix.setResourceRoot('assets');
mix.webpackConfig({
    stats: {
        children: true,
    },
});
mix.browserSync({
    proxy: 'https://inge-portfolio.dev/',
    files: [
        'public/assets/*.css',
        'public/assets/*.js',
        'public/index.html',
        'public/assets/*.webp',
    ],
});

// Mix Execution
mix.js('src/js/**/*.js', 'public/assets/app.js')
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
mix
  .ImageWebp({
    from: 'assets/images',
    to: 'public/assets/images',
  })
mix.copyDirectory("assets/icons", 'public/assets/icons');
mix.copyDirectory("assets/favicon", 'public/assets/favicon');
mix.copy("assets/site.webmanifest", "public/assets/site.webmanifest");
