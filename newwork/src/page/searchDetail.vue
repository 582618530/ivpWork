<template lang="html">
  <div class="detail">
      <!-- 头部 开始 -->
      <div class="header">
          <img src="../assets/back.png" @click="goback" alt="">
          <span>搜索新闻</span>
          <span>隐藏</span>
      </div>
        <!-- 头部 结尾 -->

        <!-- 搜索详情 开始 -->
        <div class="content">
            <div class="container"><!-- 非常规传值都需要 && 是否渲染 -->
                <div class="title">{{$route.params.item && $route.params.item.title}}</div>
                <div class="message">
                    <span>{{$route.params.item && $route.params.item.time}}</span>
                    <span>{{$route.params.item && $route.params.item.src}}</span>
                </div>
                <div class="newsContent" 
                v-html="$route.params.item && $route.params.item.content"
                ></div>
            </div>
        </div>
        <!-- 搜索详情 结尾 -->
  </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.back(-1)
        }
    },

};
</script>

<style lang="css" scoped>
.header{
    width: 100%;
    height: 1.33rem;
    background-color: #d43d3d;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    justify-content:  space-between;/* ui特有靠两边样式 */
}
.header img{
    width: 25px;
    height: 25px;
    padding: 0 .19rem;
}
.header span:last-child{
    opacity: 0;
}
.content{
    padding-top:1.33rem;
}
.container{
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
    color: #888;
}
.message span:last-child{
    margin-left:10px;
}
.container img{
    width: 100%;
    margin-bottom: 20px;
}
.newsContent{
    font-size: 18px;
    line-height: 30px
}
</style>
