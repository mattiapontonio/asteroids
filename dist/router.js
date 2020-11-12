import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c5c8f76 = () => interopDefault(import('..\\pages\\fun.vue' /* webpackChunkName: "pages/fun" */))
const _30141c3c = () => interopDefault(import('..\\pages\\more-fun\\index.vue' /* webpackChunkName: "pages/more-fun/index" */))
const _6c17e4ee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fun",
    component: _3c5c8f76,
    name: "fun"
  }, {
    path: "/more-fun",
    component: _30141c3c,
    name: "more-fun"
  }, {
    path: "/",
    component: _6c17e4ee,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
