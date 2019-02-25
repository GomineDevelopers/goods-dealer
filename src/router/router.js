import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('../components/HelloWorld.vue'),
      meta: {
        title: '测试helloWorld页面',
      },
    },
    // 地址管理
    {
      path: '/address',
      name: 'address',
      component: () => import('../views/address/addAddress.vue')
    },
    {
      path: '/addresslist',
      name: 'addresslist',
      component: () => import('../views/address/addressList.vue')
    },
    // 商品
    {
      path: '/goodslist',
      name: 'goodslist',
      component: () => import('../views/goods/goodsList.vue')
    },
    {
      path: '/goodsdetail',
      name: 'goodsdetail',
      component: () => import('../views/goods/goodsDetail.vue')
    },
    // 商品购买
    {
      path: '/buy',
      name: 'buy',
      component: () => import('../views/buy/buy.vue')
    },
    {
      path: '/buysuccessful',
      name: 'buySuccessful',
      component: () => import('../views/buy/buySuccessful.vue')
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: () => import('../views/buy/orderList.vue')
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/register.vue')
    }
  ]
})