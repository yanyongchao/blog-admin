<template>
  <div class="error">
    <div class="error-content">
      <img src="../../assets/images/404.png" alt="404">
      <p>页面找不到，你可以
        <a class="text--primary cursor--hand" @click="refresh">返回首页</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    refresh() {
      window.location.href = '/'
    }
  }
}
</script>

<style lang="stylus" scoped>
.error
  height 100vh
  height 600px
  &-content
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    text-align center
    h1
      font-size 28px
    p
      color #55575B
      font-size 16px
</style>
