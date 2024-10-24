// Config vars
const dest = "dist";

const gulp = require('gulp');

const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.style_libs = tasks.style_libs;
exports.js_build = tasks.js_build;
exports.js_libs = tasks.js_libs;
exports.js_dev = tasks.js_dev;
exports.html = tasks.html;
exports.php = tasks.php;
exports.image_rasterize = tasks.image_rasterize;
exports.image_webp = tasks.image_webp;
exports.svg_css = tasks.svg_css;
exports.svg_sprite = tasks.svg_sprite;
exports.fonts_ttf = tasks.fonts_ttf;
exports.fonts = tasks.fonts;
exports.bs_html = tasks.bs_html;
exports.bs_php = tasks.bs_php;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
	exports.style_libs,
	exports.style,
	exports.js_libs,
	exports.js_dev,
	exports.image_rasterize,
	exports.image_webp,
	exports.svg_css,
	exports.svg_sprite,
	exports.fonts_ttf,
	exports.fonts,
	exports.html,
	exports.bs_html,
	exports.watch
)
exports.dev_php = gulp.parallel(
	exports.style_libs,
	exports.style,
	exports.js_libs,
	exports.js_dev,
	exports.image_rasterize,
	exports.image_webp,
	exports.svg_css,
	exports.svg_sprite,
	exports.fonts_ttf,
	exports.fonts,
	exports.php,
	exports.bs_php,
	exports.watch
)