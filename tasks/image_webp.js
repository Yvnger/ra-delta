const { src } = require('gulp');
const webpConv = require('gulp-webp');
const changed = require('gulp-changed');
const multiDest = require('gulp-multi-dest');
const plumber = require('gulp-plumber');
const bs = require('browser-sync');

module.exports = function webp() {
    return src('assets/img/**/*.+(png|jpg|jpeg)')
        .pipe(plumber())
        .pipe(changed('assets/img', {
            extension: '.webp'
        }))
        .pipe(webpConv())
        .pipe(multiDest(['src/img', 'assets/img']))
        .pipe(bs.stream());
}