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

#### Demo

apy_key: DEMO_KEY

## Getting started

```shell
export PORT=3000
export DEBUG=express:*
export NODE_ENV=development
git clone https://github.com/mattiapontonio/asteroids.git
cd asteroids
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
npm i
npm start
```

open https://localhost:3000

## Scripts

```shell
npm run
```

## Screenshots

![alt](screenshots/Screenshot_20201110-042136.png)
![alt](screenshots/Screenshot_20201110-042150.png)
![alt](screenshots/Screenshot_20201110-042209.png)
![alt](screenshots/Screenshot_20201110-152839.png)

## Resources

- <https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/>
