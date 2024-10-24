const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const ttf2woff2 = require('gulp-ttftowoff2');
const ttf2woff = require('gulp-ttf2woff');
const bs = require('browser-sync');

module.exports = function ttf(done) {
  src('src/fonts/**/*.ttf')
    .pipe(changed('assets/fonts', {
      extension: '.woff2',
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(ttf2woff2())
    .pipe(dest('assets/fonts'))
    .pipe(bs.stream())

  src('src/fonts/**/*.ttf')
    .pipe(changed('assets/fonts', {
      extension: 'woff',
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(ttf2woff())
    .pipe(dest('assets/fonts'))
    .pipe(bs.stream())
  done();
}
