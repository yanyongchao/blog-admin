<template>
  <div class="m-leftbar">
    <div class="avatar">
      <img src="../assets/images/avatar.jpg" alt="">
    </div>
    <Menu theme="light" :accordion="true" width="200px" :active-name="activeName" @on-select="handleSelect" :open-names="openName">
      <Submenu name="article">
        <template slot="title">
          <Icon type="ios-paper-outline"></Icon>
          文章管理
        </template>
        <MenuItem name="article-list">文章列表</MenuItem>
        <MenuItem name="article-add">添加文章</MenuItem>
      </Submenu>
      <Submenu name="classification">
        <template slot="title">
          <Icon type="ios-gear-outline"></Icon>
          分类管理
        </template>
        <MenuItem name="classification-all">全部分类</MenuItem>
        <MenuItem name="classification-add">新增分类</MenuItem>
      </Submenu>
      <Submenu name="category">
        <template slot="title">
          <Icon type="ios-pricetags-outline"></Icon>
          标签管理
        </template>
        <MenuItem name="category-all">全部标签</MenuItem>
        <MenuItem name="category-add">新增标签</MenuItem>
      </Submenu>
      <MenuItem name="user">
      <Icon type="android-people"></Icon>
      用户信息
      </MenuItem>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: '',
      openName: ''
    }
  },
  methods: {
    handleSelect(name) {
      this.$router.push({ name })
    }
  },
  created() {
    this.activeName = this.$route.name
    this.openName = this.$route.name.split('-')
  }
}
</script>
<style lang="stylus">
.m-leftbar
  position fixed
  top 0
  bottom 0
  left 0
  width 220px
  padding 20px 0 0 20px
  background-color #fff
  .avatar
    text-align center
    img
      width 100px
      height 100px
      border-radius 50%
</style>
