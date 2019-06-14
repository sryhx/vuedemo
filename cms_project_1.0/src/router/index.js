import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Vip from '@/components/Vip/Vip'
import ShopCart from '@/components/ShopCart/ShopCart'
import My from '@/components/My/My'
import NewsList from '@/components/NewsList/NewsList'
import NewsDetail from '@/components/NewsList/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'vip',
      path: '/vip',
      component: Vip
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      component: ShopCart
    },
    {
      name: 'my',
      path: '/my',
      component: My
    },
    {
      name: 'newslist',
      path: '/news/list',
      component: NewsList
    },
    {
      name: 'newsdetail',
      path: '/news/detail',
      component: NewsDetail
    }
  ]
})
