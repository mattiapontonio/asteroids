# asteroids

A [Vue.js](https://vuejs.org) Progressive Web App with Server Side Rendering and hydratated by REST microservices uses data from [The National Aeronautics and Space Administration's application programming interface](https://api.nasa.gov).

![](https://img.shields.io/github/issues/mattiapontonio/asteroids)
![](https://img.shields.io/github/forks/mattiapontonio/asteroids)
![](https://img.shields.io/github/stars/mattiapontonio/asteroids)
![](https://img.shields.io/github/license/mattiapontonio/asteroids)
![](https://img.shields.io/github/issues/mattiapontonio/asteroids)

![](screenshots/Screenshot_20201110-042136.png)
![](screenshots/Screenshot_20201110-042150.png)
![](screenshots/Screenshot_20201110-042209.png)
![](screenshots/Screenshot_20201110-152839.png)

## Environments

|branch|uri|
|-|-|
|develop|https://asteroids-nasa-develop.herokuapp.com/|
|master|https://asteroids-nasa.herokuapp.com/|

## Stack

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com)
- [Vue CLI](https://cli.vuejs.org/)
- [Git](https://git-scm.com/)
- [Nuxt.js](https://nuxtjs.org/docs/2.x/get-started/installation)

## Getting started
```shell
export PORT=<port>
export API_KEY=<key>
git clone https://github.com/mattiapontonio/asteroids.git
cd asteroids
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
npm i
npm run generate
npm start
```

## Scripts
```shell
npm run
```

### API
https://api.nasa.gov/
