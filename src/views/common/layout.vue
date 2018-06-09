<template>
  <div class="layout">
    <leftbar></leftbar>
    <navbar/>
    <div class="container">
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Leftbar from '@/components/leftbar.vue'
export default {
  components: {
    navbar: Navbar,
    leftbar: Leftbar
  }
}
</script>

<style lang="stylus">
.layout
  .container
    padding 16px
    margin 50px 0 0 220px
  .content-wrapper
    padding 16px
    background-color #fff
    min-height calc(100vh - 82px)
</style>
