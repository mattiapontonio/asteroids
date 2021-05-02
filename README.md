# asteroids

A [progressive web app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) consumes [NASA Open APIs](https://api.nasa.gov).

![alt](https://img.shields.io/github/issues/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/forks/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/stars/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/license/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/issues/mattiapontonio/asteroids)

## Environments

|branch|uri|
|-|-|
|develop|<https://asteroids-nasa-develop.herokuapp.com/>|
|||
|main|<https://asteroids-nasa.herokuapp.com/>|

## Stack

- [Node.js](https://nodejs.org/en/)
- [Web_Components](https://developer.mozilla.org/it/docs/Web/Web_Components)
- [Vue.js](https://v3.vuejs.org/)

### API

- [Generate API Key](https://api.nasa.gov/#apidatagov_signup)
- [Asteroids - NeoWs](https://api.nasa.gov/#NeoWS)

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

## Related

- <https://nuxtjs.org/docs/2.x/deployment/heroku-deployment>

## Example URLs

- <http://localhost:8080?api_key=DEMO_KEY&start_date=2021-04-22&end_date=2021-04-15&date=2021-04-21>
- <https://asteroids-nasa-develop.herokuapp.com?api_key=DEMO_KEY&start_date=2021-04-22&end_date=2021-04-15&date=2021-04-21>
