const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const bs = require('browser-sync');

module.exports = function build_js() {
    return src(['src/ts/main.ts'])
        .pipe(webpack(require('../webpack.config.js')))
        .pipe(dest('assets/js/'))
        .pipe(bs.stream());
}