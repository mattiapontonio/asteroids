const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const fs = require('fs');
const querystring = require('querystring');
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
app.get('/neo/rest/v1/feed', (oreq, ores) => {
    oreq.query.api_key=process.env.API_KEY;
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
https.createServer({
    key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
}, app).listen(port, () => console.log(`Example app listening at https://localhost:${port}`));
