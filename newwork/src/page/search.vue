<template lang="html">
  <div>
      <!-- 头部 开始 -->
      <div class="search-header">
          <div class="header">
              <img src="../assets/back.png" @click="goback" >
              <span>搜索</span>
              <span>隐藏</span>
          </div>
          <!-- 搜索栏 开始 -->
          <div class="search">
              <input type="text" placeholder="请输入搜索内容" v-model="keywords" @keyup.enter="toSearch(keywords)">
          </div>
          <!-- 搜索栏 结尾 -->
      </div>
      <!-- 头部 结尾 -->
      <div class="news-content">
          <div class="secion" v-for="(item, index) in result" :key="index">
              <div class="news" @click="toSearchDetail(item)">
                  <div class="news-left">
                    <img :src="item.pic || require('../assets/tongyong.jpg')" alt="">
                  </div>
                  <div class="news-right">
                      <div class="newsTitle">{{item.title}}</div>
                      <div class="newMessage">
                          <span>{{item.time}}</span>
                          <span>{{item.src}}</span>
                      </div>

                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      result: '',
      keywords: '',
    }
  },
  methods:{
      goback(){
          this.$router.back(-1)
      },
      toSearch(keywords){
          if(keywords !== ""){
            this.result = ''
            if(keywords.trim()){
                this.$http.get('/api/search/' + keywords)/* 请求搜索目标 */ /* http://imzjh.com/api/search/‘keywords，eg'天猫' */
                .then(res => {
                this.result = res.data.result.list
                })
            }
          }
      },
      toSearchDetail(item){/* 进入搜索详情 */
        this.$router.push({name: 'searchDetail', params: { item : item }/* 路由传值 */})
      },
  }
};
</script>

<style lang="css" scoped>
.search-header{
    position: fixed;
    left: 0;
    top: 0;
    left: 0;
    width: 100%;
}

.header{
    height: 1.33rem;
    background-color: #d43d3d;
    display: flex;
    justify-content: space-between;/* 内容靠两边 */
    align-items: center;/* 元素居中 */
    font-size: 20px;
    font-weight: 600;
    color: #fff;
}
.header span:last-child{
    opacity: 0;/* 隐藏，为justify-content: space-between;创造两边靠边的条件 */
}
.header img{
    width: 25px;
    height: 25px;
    padding-left: .13rem;
}
.search{
    width: 100%;
    height: 1.5rem;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items:center;
}

.search input{
    width: 96%;
    height: 60%;
    border-radius: 4px;
    border: #ccc;
    outline: #ccc;
    text-align: center;
}
.news-content{
    width: 100%;
    height: 2.5rem;
    border-bottom: 1px solid #ccc;
}
.news{
    height: 2.5rem;
    box-sizing: border-box;
    margin: 10px 10px;
    display: flex;
}

.news-left{
    height: 100%;
    width: 2.8rem;
    display: inline-block;
}
.news-left img{
    width: 100px;
    height: 100%;
}
.news-right{
    flex: 1;
    padding-left: 10px;
}
.newsTitle{
    width: 100%;
    height: 62%;
    color: #404040;
    font-size: 18px;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.newsMessage{
    width: 100%;
    height: 38%;
    display: flex;
    align-items:flex-end;
    color:#888;
    justify-content: space-between;/* 靠两边 */
    overflow: hidden;
    white-space: nowrap;/* 不换行 */
}
</style>
