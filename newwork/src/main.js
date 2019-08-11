// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import { resolve } from 'q';
import { rejects } from 'assert';

Vue.use(Vuex)
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
  state:{
    channels: '',/* 频道值1-2 ，2-4*/ /* eg.["头条", "新闻", "国内", "国际",...] */
    channelIndex: 0,/* 频道号 */
    channelData: '',/* 详情值 1-0 */
    isActive: 0,
    newDataIndex:'',
    showMy: false,/* 个人 状态值 */
    showLogin: false,/* 个人 登录页状态 */
    collection:[],/* 收藏 组 */
    likeImg: require("./assets/like.png"),/* 收藏图 */
  },
  mutations:{
    muChannels(state, data) {/* 频道值，2-3 */
      state.channels = data
      // console.log(state.channels)
    },
    muGetData(state,data){
      state.channelData = data
    },
    muChannelIndex(state,index){
      state.channelIndex = index
    },
    muIsActive(state,index){
      state.isActive = index
    },
    muNewDataIndex(state, index) {
      state.newDataIndex = index
    },
    muShowMy(state, statu) {/* 个人 状态值 */
      state.showMy = statu
    },
    muShowLogin(state,statu){
      state.showLogin = statu
    },
    muLikeImg(state,url){
      state.likeImg = url
    },
    muCollect(state, data) {/* 由详情页 添加收藏 同步 */
      state.collection.push(data)
      // state.collection.reverse()
    },
    muLike(state, data) {
      state.collection.splice(state.collection.indexOf(data), 1)/* 取消收藏 删除指定收藏 */
    },
  },
  actions:{
    acChannels({ commit,state}){
      axios.get('/api/channel')/* 已修改接口 */
      .then(res => {
        commit('muChannels', res.data.result)
      })
      resolve()
    },
    acGetData({ commit,state }, channel) {
      return new Promise((resolve, reject) => {
        axios.get('/api/channel/' + channel)
          .then(res => {
            commit('muGetData', res.data.result.list)
          })
          resolve()
      })
    },
  },
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
