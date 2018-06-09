<template>
  <div class="error">
    <div class="error-content">
      <img src="../../assets/images/500.png" alt="500">
      <p>服务端错误，你可以 <a class="text--primary cursor--hand" @click="$router.go(-1)">返回上一页</a></p>
    </div>
  </div>
</template>

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
