const bs = require('browser-sync');

module.exports = function bs_html() {
	bs.init({
		server: {
			baseDir: 'assets/',
			host: '127.0.0.1',
			index: 'index.html'
		},
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware("*", function (req, res, next) {
					// Check if the request is for an HTML page
					if (req.url.endsWith('.html') || req.url === '/') {
						res.writeHead(302, {
							location: "/404.html"
						});
						res.end("Redirecting!");
					} else {
						next(); // Pass through for other types of requests
					}
				});
			}
		},	
		browser: 'yandex_browser',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}