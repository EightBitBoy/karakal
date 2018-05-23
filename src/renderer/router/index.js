import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'my-component',
      component: require('@/components/MyComponent').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
