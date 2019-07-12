import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/components/index')
  }, {
    path: '/index',
    name: 'index',
    component: () => import('@/components/index')
  }, {
    path: '/videoDetail',
    name: 'videoDetail',
    component: () => import('@/components/videoDetail')
  },
  {
    path: '/videopay',
    name: 'videopay',
    component: () => import('@/components/pay')
  }, {
    path: '/usercenter',
    name: 'usercenter',
    component: () => import('@/components/usercenter')
  }, {
    path: '/orderlist',
    name: 'orderlist',
    component: () => import('@/components/orderList')
  }, {
    path: '/orderdetail',
    name: 'orderdetail',
    component: () => import('@/components/orderDetail')
  }, {
    path: '/edit',
    component: () => import('@/components/edit')
  }, {
    path: '/404',
    component: () => import('@/components/404')
  }
  ]
})
