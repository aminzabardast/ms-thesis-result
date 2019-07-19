import Vue from 'vue'
import Router from 'vue-router'
import PointCloudPage from './views/PointCloudPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/c/all/1',
      name: 'root',
    },
    {
      path: '/:method/:type/:number',
      name: 'main',
      component: PointCloudPage
    }
  ]
})
