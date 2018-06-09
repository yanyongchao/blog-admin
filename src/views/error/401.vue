<template>
  <div class="error">
    <div class="error-content">
      <img src="../../assets/images/401.png" alt="401">
      <p class="error-content-href">暂无权限，你可以 <a class="text--primary cursor--hand" @click="$router.go(-1)">返回上一页</a></p>
      <p class="error-content-prompt">请联系超级管理员调整权限</p>
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
      &-href
        color #55575B
        font-size 16px
      &-prompt
        color #93979F
        font-size 12px
</style>

