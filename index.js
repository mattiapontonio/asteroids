const static = require('node-static');
const http = require('http');
const file = new static.Server(__dirname, {
    cache: 0,
    headers: { 'Cache-Control': 'no-cache' },
    gzip: true
});
http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(process.env.PORT || 8080);