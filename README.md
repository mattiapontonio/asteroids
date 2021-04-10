# asteroids

A [Vue.js](https://vuejs.org) Progressive Web App with Server Side Rendering and hydratated by REST microservices uses data from [The National Aeronautics and Space Administration's application programming interface](https://api.nasa.gov).

![alt](https://img.shields.io/github/issues/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/forks/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/stars/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/license/mattiapontonio/asteroids)
![alt](https://img.shields.io/github/issues/mattiapontonio/asteroids)

## Environments

|branch|uri|
|-|-|
|develop|https://asteroids-nasa-develop.herokuapp.com/|
|master|https://asteroids-nasa.herokuapp.com/|
|develop-3|https://aqueous-fortress-96371.herokuapp.com/|

## Stack

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com)
- [Vue CLI](https://cli.vuejs.org/)
- [Git](https://git-scm.com/)
- [Nuxt.js](https://nuxtjs.org/docs/2.x/get-started/installation)

### API

- [Generate API Key](https://api.nasa.gov/#apidatagov_signup)
- [Asteroids - NeoWs](https://api.nasa.gov/#NeoWS)

## Getting started

```shell
export PORT=<port>
export API_KEY=<key>
```

```shell
git clone https://github.com/mattiapontonio/asteroids.git
cd asteroids
```

```shell
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

```shell
npm i
npm run generate
npm start
```

## Scripts

```shell
npm run
```

## Screenshots

![alt](screenshots/Screenshot_20201110-042136.png)
![alt](screenshots/Screenshot_20201110-042150.png)
![alt](screenshots/Screenshot_20201110-042209.png)
![alt](screenshots/Screenshot_20201110-152839.png)

## Related

- <https://nuxtjs.org/docs/2.x/deployment/heroku-deployment>