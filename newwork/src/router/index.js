import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import detail from '@/page/detail'
import search from '@/page/search'
import searchDetail from '@/page/searchDetail'
import collection from "@/page/collection"
import collectDetail from '@/page/collectDetail'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path:'/detail',
      name:'detail',
      component:detail,
    },
    {
      path:'/search',
      component:search,
    },
    {
      path:'/searchDetail',
      name:'searchDetail',
      component:searchDetail,
    },
    {
      path:'/collection',
      name:'collection',
      component:collection,
    },
    {
      path: '/collectDetail',
      name: 'collectDetail',
      component: collectDetail
    },
  ]
})
