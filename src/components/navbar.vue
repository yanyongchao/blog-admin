<template>
  <div class="m-navbar">
    <h1>yanyongchao博客后台管理系统</h1>
    <div class="logout-wrapper">
      <Dropdown @on-click="handleClick">
        <img src="../assets/images/logout.jpg" alt="">
        <DropdownMenu slot="list">
          <DropdownItem name="user">用户信息</DropdownItem>
          <DropdownItem name="logout">退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['logout']),
    handleClick(name) {
      if (name === 'user') {
        this.$router.push({ name })
      } else if (name === 'logout') {
        this.logout()
        this.$router.replace('/login')
      }
    }
  }
}
</script>
<style lang="stylus">
.m-navbar
  display flex
  position fixed
  left 220px
  right 0
  top 0
  z-index 100
  height 50px
  background-color #fff
  padding 0 15px
  align-items center
  justify-content space-between
  .logout-wrapper
    img
      width 30px
      height 30px
      border-radius 50%
</style>
