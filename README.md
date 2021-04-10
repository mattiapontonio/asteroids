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
<<<<<<< HEAD
=======
|develop-3|<https://aqueous-fortress-96371.herokuapp.com/>|
>>>>>>> develop-3
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

<<<<<<< HEAD
#### Demo

apy_key: DEMO_KEY

## Getting started

```shell
export PORT=3000
export DEBUG=express:*
export NODE_ENV=development
export NODE_TLS_REJECT_UNAUTHORIZED=0
=======
## Start

### Node

```shell
export PORT=<port>
export API_KEY=<key>
```

### Git

```shell
>>>>>>> develop-3
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

<<<<<<< HEAD
```shell
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:3000 --user-data-dir=C:\tmp
```

## Scripts
=======
#### Scripts
>>>>>>> develop-3

```shell
npm run
```

## Screenshots

<<<<<<< HEAD
![alt](screenshots/Screenshot_20201110-042136.png)
![alt](screenshots/Screenshot_20201110-042150.png)
![alt](screenshots/Screenshot_20201110-042209.png)
![alt](screenshots/Screenshot_20201110-152839.png)

## Resources

- <https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/>
=======
[Screenshots](/screenshots/screenshots.md)

## Related

- <https://nuxtjs.org/docs/2.x/deployment/heroku-deployment>
>>>>>>> develop-3
