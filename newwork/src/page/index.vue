<template>
  <div>
    <my v-show="showMy"></my>
    <v-header class="pos-header"></v-header><!-- 头部 -->
    <v-nav></v-nav>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vNav from '@/components/vNav'
import my from '@/components/my'

export default {
  created() {
    this.$store.commit('muShowMy', false)/* 先同步vuex 个人 状态值 */
    // this.$store.commit('muShowLogin', false)
  },
  components: {
    vHeader,
    vNav,
    my,
  },
  computed: {
    showMy() {
      return this.$store.state.showMy/* 绑定个人 状态值 */
    }
  },
};
</script>

<style lang="css" scoped>
.pos-header {
  position: fixed;
  top: 0;
  left: 0;
}
my{
  z-index: 999;
}
</style>