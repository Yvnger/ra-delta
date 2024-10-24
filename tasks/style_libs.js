const plugins = [];

const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');
const bs = require('browser-sync');

module.exports = function style_libs(done) {
  if (plugins.length > 0) {
    return src(plugins)
      .pipe(map.init())
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(concat('libs.min.css'))
      .pipe(map.write('../sourcemaps/'))
      .pipe(dest('assets/css/'))
      .pipe(bs.stream());
  } else {
    return done(console.log(chalk.redBright('No added CSS/SCSS plugins')));
  }
}
