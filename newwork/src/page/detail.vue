<template lang="html">
  <div class="detail">
    <!-- 头部 -->
      <div class="header">
          <img src="../assets/back.png" @click="goback"><!-- 返回按钮 -->
          <span>{{this.$store.state.channels[this.$store.state.channelIndex]}}频道</span>
          <img :src="likeImg" @click="clickCollect()"><!-- 收藏按钮 -->
      </div>
      <!-- 详情内容 -->
      <div class="content">
        <div class="container"><!-- {{xx && xx.data}}先判断是否存在xx才能有权渲染xx.data -->
          <div class="title">{{channelNewData &&　channelNewData.title}}</div>
          <div class="message">
            <span>{{channelNewData && channelNewData.time || '2017-06-07 12:00'}}</span>
            <span>{{channelNewData && channelNewData.src || '爱新闻'}}</span>
          </div>
          <img :src="channelNewData && channelNewData.pic || require('../assets/tongyong.jpg')" alt="">
          <div class="newsContent" v-html="channelNewData && channelNewData.content"></div><!-- 文章内容 -->
        </div>

      </div>

  </div>
</template>

<script>
export default {
  computed:{
    channelNewData() {/* 详情值+以上 end*/
      return this.$store.state.channelData[this.$store.state.newDataIndex]/* 把之前的item[index]的值传过来，即用index领取vuex对应的data值 */
    },
    likeImg(){
      return this.$store.state.likeImg
    }
  },
  methods:{
    goback() {
      this.$router.push('/')
    },
    clickCollect() {
      if(this.$store.state.likeImg === require("../assets/like.png")) {
        this.$store.commit('muLikeImg', require("../assets/collect.png"))
        this.$store.commit('muCollect', this.channelNewData)/* 添加收藏 */
      } else {
        this.$store.commit('muLikeImg', require("../assets/like.png"))
        this.$store.commit('muLike', this.channelNewData)/* 再次点击取消收藏 */
      }
      // console.log(this.$store.state.collection)
    },
    toCollectDetail(item,index){
      this.$router.push({name:'collectDetail',params:{item,item}})
    }
  }
};
</script>

<style lang='css' scoped >
.detail{
  overflow: hidden;
}
.header{
  width: 100%;
  height: 1.33rem;
  background-color: #d43d3d;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;/* 元素居中 */
  justify-content: space-between;/* 两边元素靠边 */
  position: fixed;
  top:0;
}

.header img{
  width: 25px;
  height: 25px;
  padding: 0 .19rem;
}
.content{
  padding-top:1.3rem;
}
.container{/* 容器 */
  margin: 20px;
}
.title{
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.message{
  text-align: center;
  margin: 20px 0;
  text-align: center
}
.message span:last-child{
  margin-left: 10px;
}
.container img{
  width: 100%;
  margin-bottom: 20px;
}

.newsContent{
  font-size: 18px;
  line-height: 30px;
}



</style>
