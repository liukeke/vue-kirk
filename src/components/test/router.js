import Vue from 'vue'
import Router from 'vue-router'
import Hello from './Hello'
import Page from './Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    }
  ]
})
