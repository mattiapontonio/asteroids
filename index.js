const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const https = require('https');
const querystring = require('querystring');
const manifest = require('./manifest.js');
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
app.get('/asteroids-of-the-day', (req, res) => {
    res.send(`
    <head>
	<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<header>
			<button onclick="history.back()">back</button>
			<button onclick="history.forward()">forward</button>
		</header>
		<main>
            <h1>Asteroids - NeoWs</h1>
            <a href="https://api.nasa.gov/#NeoWS">https://api.nasa.gov/#NeoWS</a>
				<script src="scatter-plot.js"></script>
				<form>
					<label for="api_key">api_key</label>
					<input 
                    type="text" 
                    id="api_key" 
                    name="api_key"
                    value=${req.query.api_key}
                    required>
						<label for="start_date">start_date</label>
						<input 
                    id="start_date" 
                    type="date"
                    name="start_date"
                    value=${req.query.start_date}
                    required>
							<label for="end_date">start_date</label>
							<input 
                    id="end_date" 
                    type="date"
                    name="end_date"
                    value=${req.query.end_date}
                    required>
								<button type="submit" value="Submit">Submit</button>
							</form>
							<scatter-plot></scatter-plot>
						</main>
                        <footer>
									<table>
										<tbody>
											<tr>
												<td>GitHub</td>
												<td>
													<a href="https://github.com/mattiapontonio/asteroids">https://github.com/mattiapontonio/asteroids</a>
												</td>
											</tr>
											<tr>
												<td>Version</td>
												<td>0.0.6</td>
											</tr>
											<tr>
												<td>
													<div>Icons made by 
                                    
														<a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from 
                                    
														<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</footer>
					</body>
    `);
});
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="style.css">
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
				<title>asteroids</title>
				<meta data-n-head="1" data-hid="description" name="description" content="A Vue.js Progressive Web App with Server Side Rendering and hydratated by REST microservices uses data from The National Aeronautics and Space Administration&#39;s application programming interface.">
					<link data-n-head="1" rel="icon" type="image/x-icon" href="https://localhost:3000/favicon.ico">
						<link data-n-head="1" rel="manifest" href="https://localhost:3000/manifest.webmanifest">
							<meta data-n-head="1" name="viewport" content="width=device-width, initial-scale=1">
              <script>
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.register('service-worker.js')
                  .then(console.log)
                  .catch(console.log);
                }
              </script>
							</head>
							<body>
								<header>
									<button onclick="history.back()">back</button>
									<button onclick="history.forward()">forward</button>
								</header>
								<h1>Asteroids</h1>
								<nav class="menu">
									<ul>
										<li>
											<a href="https://localhost:3000/asteroids-of-the-day" class="">asteroids-of-the-day</a>
										</li>
										<li>
											<a href="https://localhost:3000/brightest%20of-the-week" class="">brightest of-the-week</a>
										</li>
										<li>
											<a href="https://localhost:3000/astronomy-picture-of-the-day" class="">astronomy-picture-of-the-day</a>
										</li>
									</ul>
								</nav>
								<footer>
									<table>
										<tbody>
											<tr>
												<td>GitHub</td>
												<td>
													<a href="https://github.com/mattiapontonio/asteroids">https://github.com/mattiapontonio/asteroids</a>
												</td>
											</tr>
											<tr>
												<td>Version</td>
												<td>0.0.6</td>
											</tr>
											<tr>
												<td>
													<div>Icons made by 
                                    
														<a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from 
                                    
														<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</footer>
							</body>
						</html>`);
})
app.use(express.static(path.join(__dirname, 'static')));
https
.createServer(process.env.NODE_ENV !== 'production' ? {
    key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
}:undefined, app)
.listen(process.env.PORT);
