# asteroids

A [Vue.js](https://vuejs.org) Progressive Web App with Server Side Rendering and hydratated by Representational state transfer microservices uses data from [The National Aeronautics and Space Administration's application programming interface](https://api.nasa.gov).

![alt](https://img.shields.io/github/issues/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/forks/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/stars/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/license/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/issues/mattiapontonio/asteroids)

## Environments

|branch|uri|
|-|-|
|develop|<https://asteroids-nasa-develop.herokuapp.com/>|
|develop-3|<https://aqueous-fortress-96371.herokuapp.com/>|
|master|<https://asteroids-nasa.herokuapp.com/>|

## Stack

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com)
- [Vue CLI](https://cli.vuejs.org/)
- [Git](https://git-scm.com/)
- [Nuxt.js](https://nuxtjs.org/docs/2.x/get-started/installation)

### API

- [Generate API Key](https://api.nasa.gov/#apidatagov_signup)
- [Asteroids - NeoWs](https://api.nasa.gov/#NeoWS)

## Start

### Node

```shell
export PORT=<port>
export API_KEY=<key>
```

### Git

```shell
git clone https://github.com/mattiapontonio/asteroids.git
cd asteroids
```

### SSL

```shell
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

### npm

```shell
npm i
npm start
```

#### Scripts

```shell
npm run
```

## pwa-asset-generator

<https://www.npmjs.com/package/pwa-asset-generator>

```shell
npx pwa-asset-generator asteroid.svg -i ./app.html -m ./static/manifest.webmanifest
```

## Screenshots

[Screenshots](/screenshots/screenshots.md)

## Related

- <https://nuxtjs.org/docs/2.x/deployment/heroku-deployment>
