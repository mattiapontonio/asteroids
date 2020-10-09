module.exports = {
    devServer: {
        before: function (app, server, compiler) {
            const https = require('https');
            app.get('/planetary/apod', (oreq, ores) => {
                const options = {
                    host: 'api.nasa.gov',
                    path: `/planetary/apod?api_key=${process.env.VUE_APP_API_KEY}`,
                    method: 'GET'
                };
                const creq = https
                    .request(options, pres => {
                        pres.setEncoding('utf8');
                        ores.writeHead(pres.statusCode);
                        pres.on('data', chunk => {
                            ores.write(chunk);
                        });
                        pres.on('close', () => {
                            ores.end();
                        });
                        pres.on('end', () => {
                            ores.end();
                        });
                    })
                    .on('error', e => {
                        console.log(e.message);
                        try {
                            ores.writeHead(500);
                            ores.write(e.message);
                        } catch (e) {
                            // ignore
                        }
                        ores.end();
                    });
                creq.end();
            });
        }
    }
}