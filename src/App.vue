<template>
  <div id="app" class="layout-wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './assets/css/reset.css'
@import './assets/css/common.css'
.layout-wrapper
  position relative
  width 100%
  height auto
  min-height 100%
  overflow-x hidden
</style>
