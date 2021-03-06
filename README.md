# asteroids

A [progressive web app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) that consumes [NASA Open APIs](https://api.nasa.gov).

## Environments

|branch|uri|
|-|-|
|develop|<https://asteroids-nasa-develop.herokuapp.com/>|
|main|<https://asteroids-nasa.herokuapp.com/>|

## Stack

- [Node.js](https://nodejs.org/en/)
- [Web Components](https://developer.mozilla.org/it/docs/Web/Web_Components)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Progressive web applications](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

### NASA Open APIs

- [Generate API Key](https://api.nasa.gov/#apidatagov_signup)
- [Asteroids - NeoWs](https://api.nasa.gov/#NeoWS)
- [APOD](https://api.nasa.gov/#apod)

## Start

```sh
git clone https://github.com/mattiapontonio/asteroids.git
cd asteroids
npm start
```

## pwa-asset-generator

<https://www.npmjs.com/package/pwa-asset-generator>

```shell
npx pwa-asset-generator asteroid-d.svg -i ./index.html -m ./manifest.webmanifest --background "#2d1d40"
```

## Example URLs

- <http://localhost:8080?api_key=DEMO_KEY&start_date=2021-04-22&end_date=2021-04-15&date=2021-04-21>
- <https://asteroids-nasa-develop.herokuapp.com?api_key=DEMO_KEY&start_date=2021-04-22&end_date=2021-04-15&date=2021-04-21>
