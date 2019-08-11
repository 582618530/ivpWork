<template lang="html">
  <div>
      <div class="mask" @click="clickMask"></div><!-- 背景蒙版 -->
      <!-- 个人页面  开始-->
      <transition name='fade'>
          <div class="login-information" v-if="showLogin">
                <!-- 已登录页面 开始 -->
              <div class="login-content" v-show="showContent">
                  <div class="login-head">
                      <div class="avatar"><!-- 头像 -->
                        <img src="../assets/tongyong.jpg" alt="">
                      </div>
                      <div class="username">Mr.郭</div>
                  </div>

                  <div class="login-list">
                      <ul>
                          <router-link to='/collection'><li><img src="../assets/collection.png">我的收藏</li></router-link> 
                          <li><img src="../assets/aboutme.png">关于我</li>
                          <li @click="cancel"><img src="../assets/cancel.png">注销</li>
                      </ul>
                  </div>
              </div>
               <!-- 已登录页面 结尾 -->
               <!-- 未登录页面 开始-->
                <div class="nologin" v-show="showNologin">
                    <div class="nologin-content">
                        <input type="text" placeholder="邮箱">
                        <input type="text" placeholder="密码">
                        <button @click="clickLogin">登录</button>
                        <div class="register">
                            <span>立即注册</span>
                            <span>忘记密码</span>
                        </div>
                    </div>
                </div>
               <!-- 未登录页面 结尾-->
          </div>
      </transition>
      <!-- 个人页面  结尾-->
  </div>
</template>

<script>
export default {
    data(){
        return{
            showContent:true, /* 默认展示 登录内容 */
            showNologin:false,/* 默认不展示 未登录页 */
        }
    },
    created() {
        this.$store.commit('muShowLogin', false)
    },
    methods:{
        clickMask(){
            this.$store.state.showMy = false/* 点击退出蒙版 */
            this.$store.state.showLogin = false/* 点击退出登录页 */
        },
        cancel() {/* 注销不显示 */
            this.showContent = false
            this.showNologin = true
        },
        clickLogin() {
        this.showContent = true
        this.showNologin = false
        },
    },
    computed:{
        showLogin() {
             return this.$store.state.showLogin
        }
    }
};
</script>

<style lang="css" scoped>
.mask{
    position:fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
    z-index:100;
}
.login-information{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 3rem;
    background-color: #fff;
    display:flex;
    justify-content: center;/* 内容居中 */
    z-index: 999;
}
.fate-enter-active,.fate-leave-active{
    transition:all .5s ease;
}
.fate-enter{
    transform:traslateX(-100%);
}
.login-content,.nologin{
    width: 90%;
    height: 100%;
}
.login-head{
    width: 100%;
    height: 3.5rem;
    display:flex;
    flex-direction: colum;
    justify-content: center;
    align-items: center;
    padding-top: .5rem;
    color: #888;
    position: relative;
}
.avatar{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: .27rem;
}
.avatar img{
    width: 100%;
    height: 100%;
}
.login-list{
    margin-top:.8rem;
    font-size: .43rem;
    color: #404040;
}
.login-list ul li {
    height: 1.2rem;
    line-height: 1.2rem;
    display: block;
    border-bottom: 1px solid #ccc;
}
.login-list img{
    width: .64rem;
    height: .64rem;
    vertical-align: middle;/* 垂直居中 */
    margin-right: .8rem;
}

.nologin-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.33rem;
}
.nologin-content input {
  width: 80%;
  height: 1.07rem;
  margin-bottom: .53rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #888;
}
.nologin-content button {
  width: 80%;
  height: 1rem;
  background-color: #f33;
  border: 1px solid #f33;
  color: #fff;
  letter-spacing: 5px;
  border-radius: 3px;
}
.register {
  width: 90%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.register span:last-child {
  color: red;
}
.username{/* 定位在头像下面 */
    position: absolute;
    left: 43%;
    top: 81%;
}
</style>

