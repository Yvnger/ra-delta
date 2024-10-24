const { watch, parallel, series } = require('gulp');

module.exports = function watching() {
    watch('src/**/*.html', parallel('html'));
    watch('src/**/*.php', parallel('php'));
    watch('src/**/*.scss', parallel('style'));
    watch('src/**/*.ts', parallel('js_dev'));
    watch('src/**/*.json', parallel('html'));
    watch('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel('image_rasterize'));
    watch('build/img/**/*.+(png|jpg|jpeg)', parallel('image_webp'));
    watch('src/svg/css/**/*.svg', series('svg_css', 'style'));
    watch('src/svg/sprite/**/*.svg', series('svg_sprite', 'image_rasterize'));
    watch('src/fonts/**/*.ttf', series('fonts_ttf', 'fonts'));
}