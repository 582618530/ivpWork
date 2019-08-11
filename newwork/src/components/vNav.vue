<template>
<div>
  <div class="nav-content">
    <div class='nav'>
        <div class="channel">
          <ul>
            <li v-for="(channel, index) in channels" :key="index"
            @click='clickChannel(channel,index)'
            :class="{ active : isActive === index }">
              {{channel}}
            </li>
          </ul>
        </div>
      </div>
        <!--轮播图--><carousel class="carousel" >
         <!-- v-if="this.$store.state.channelIndex === 0"  -->
        </carousel><!--0频道显示第一页时，播放轮播图-->
      <div class="newsContent">
        <!-- 新闻列表开始 -->
        <div class="section" v-for="(item, index) in newData" :key="index" 
        @click="toDetail(item,index)"> 
          <div class="news">
            <div class="news-left">
              <img :src="item.pic || require('../assets/tongyong.jpg')" alt="">
            </div>
            <div class="new-right">
              <div class="newsTitile">{{item.title}}</div>
              <div class="newsMessage">
                <span>{{item.time || '2017-06-07 12:00'}}</span>
                <span>{{item.src}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <!-- 新闻列表结尾 -->
  </div>
</div>
</template>

<script>
import carousel from '@/components/carousel'
export default {
    components: {
    carousel
    },
    data(){
      return {
        items:[1,2,3,4,5,6,7,,8,9,10,11]
      }
    },
    created(){
      this.$store.dispatch('acChannels')/* 通过vuex异步方式获取频道值2-1 */
      this.$store.dispatch('acGetData', '头条')/* 通过vuex异步方式获取列表值 */
  
    },
    computed:{
      channels() {
      return this.$store.state.channels/* 从store.state获取channels的频道值1-1 */
      },
      newData(){
        return this.$store.state.channelData
      },
      isActive(){
        return this.$store.state.isActive
      }
    },
    methods:{
      clickChannel(channel,index){
        this.$store.state.channelData =  ''
        scrollTo(0,0)
        this.isActive = index
        this.$store.commit('muChannelIndex',index)
        this.$store.commit('muIsActive',index)
        this.$store.dispatch('acGetData',this.$store.state.channels[this.$store.state.channelIndex])
      },
      toDetail(item,index){
        console.log(index)
        this.$store.commit("muNewDataIndex",index)/* 同步给vuex */
        this.$router.push('/detail')
        /* 下面判断是用于详情页的收藏img状态 */
        if(JSON.stringify(this.$store.state.collection).indexOf(JSON.stringify(this.$store.state.channelData[this.$store.state.newDataIndex])) != -1) {
        this.$store.commit('muLikeImg', require("../assets/collect.png"))
      } else {
        this.$store.commit('muLikeImg', require("../assets/like.png"))
      }
      }
    }
};
</script>

<style lang="css" scoped>
.nav-content {
  margin-top: -4.4rem;
}
.nav {
  width: 100%;
  height: .96rem;
  background-color: #f4f5f6;
  display: flex;
  position: fixed;
  z-index: 99;
}
.channel {
  display: inline-block;
  flex: 1;
  white-space: nowrap;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  font-size: .45rem;
  color: #505050;
}
.channel::-webkit-scrollbar {
  height: 0;
}
.addChannel {
  display: inline-block;
  width: 10%;
  height: 100%;
  border-left: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addChannel img {
  width: .53rem;
  height: .53rem;
}
.channel ul li {
  display: inline-block;
  margin-left: .32rem;
  margin-right: .32rem;

}

.active {
  color: red;
}
.newsContent {
  padding-top: 5.3rem;
}
.loading {
  position: absolute;
  top: 2.16rem;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #fff;
  z-index: 99;
}
.loading img {
  margin-top: 30px;
  width: 50px;
  height: 50px;
  animation: loading .6s linear infinite
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.section {
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #ccc;
}
.news {
  height: 2.25rem;
  box-sizing: border-box;
  margin: 10px 10px;
  display: flex;
}
.news-left {
  height: 100%;
  width: 2.8rem;
  display: inline-block;
}
.news-left img {
  width: 100%;
  height: 100%;
}
.news-right {
  flex: 1;
  padding-left: 10px;
}
.newsTitle {
  width: 100%;
  height: 62%;
  color: #404040;
  font-size: 18px;
  overflow: hidden;
}
.newsMessage {
  width: 100%;
  height: 66%;
  display: flex;
  align-items: flex-end;
  color: #888;
  justify-content: space-between;
}

</style>
