import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PointCloudTest from './views/PointCloudTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/c/smoke/1',
      name: 'root',
    },
    {
      path: '/:method/:type/:number',
      name: 'main',
      component: PointCloudTest
    }
  ]
})
