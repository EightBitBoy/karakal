import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: require('@/components/Home').default
    },
    {
      path: '/playground/hacking-area',
      component: require('@/components/PlayGround/HackingArea').default
    },
    {
      path: '/playground/hello-world-example',
      component: require('@/components/PlayGround/HelloWorldExample').default
    },
    {
      path: '/playground/list-example',
      component: require('@/components/PlayGround/ListExample').default
    },
    {
      path: '/playground/events-example',
      component: require('@/components/PlayGround/EventsExample').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
