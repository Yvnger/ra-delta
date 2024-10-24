const { src, dest } = require('gulp');
const svgmin = require('gulp-svgmin');
const svgCss = require('gulp-svg-css-pseudo');
const bs = require('browser-sync');

module.exports = function svg_css() {
    return src('src/svg/css/**/*.svg')
        .pipe(svgmin({
            plugins: [
                {
                    removeComments: true
                },
                {
                    removeEmptyContainers: true
                }
            ]
        }))
        .pipe(svgCss({
            fileName: '_svg',
            fileExt: 'scss',
            cssPrefix: '--svg__',
            addSize: false
        }))
        .pipe(dest('src/scss/global'))
        .pipe(bs.stream());
}