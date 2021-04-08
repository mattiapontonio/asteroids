const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const https = require('https');
const querystring = require('querystring');
const manifest = require('./manifest.js');
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/planetary/apod', (oreq, ores) => {
    const options = {
        host: 'api.nasa.gov',
        path: `/planetary/apod?api_key=${process.env.API_KEY}`,
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
app.get('/neo/rest/v1/feed', (oreq, ores) => {
    const options = {
        host: 'api.nasa.gov',
        path: `/neo/rest/v1/feed?${querystring.stringify(oreq.query)}`,
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
app.get('/neo/rest/v1/neo/:id', (oreq, ores) => {
    const options = {
        host: 'api.nasa.gov',
        path: `/neo/rest/v1/neo/${oreq.params.id}?${querystring.stringify(oreq.query)}`,
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
app.get('/manifest.webmanifest', (req, res) => res.json(manifest))
https
.createServer(process.env.NODE_ENV !== 'production' ? {
    key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
}:undefined, app)
.listen(port, console.log);
