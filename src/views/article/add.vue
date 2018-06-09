<template>
  <div class="add-article">
    <v-article @add-article="addArticle" :type="1"></v-article>
  </div>
</template>

<script>
import Article from '@/components/article'
import { postArticleRes } from '@/http'

export default {
  components: {
    'v-article': Article
  },
  methods: {
    addArticle(form) {
      postArticleRes(form).then(res => {
        if (res.state === 1000) {
          this.$Message.success('文章发表成功')
          this.$router.push({ name: 'article-list' })
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.add-article
  .title
    display inline-block
    color #2d8cf0
    margin-bottom 10px
  .v-note-wrapper
    min-height 600px
  .editor-form-item
    .ivu-form-item-content
      z-index 0
</style>
