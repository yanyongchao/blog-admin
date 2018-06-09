<template>
  <div class="add-article">
    <v-article @edit-article="editArticle" :type="2" :data="article"></v-article>
  </div>
</template>

<script>
import Article from '@/components/article'
import { getArticleRes, putArticleRes } from '@/http'

export default {
  data() {
    let params = this.$route.params
    return {
      id: params.id,
      article: {}
    }
  },
  components: {
    'v-article': Article
  },
  methods: {
    editArticle(form) {
      putArticleRes(this.id, form).then(res => {
        if (res.state === 1000) {
          this.$Message.success('文章编辑成功')
          this.$router.push({ name: 'article-list' })
        }
      })
    }
  },
  created() {
    getArticleRes(this.id).then(res => {
      if (res.state === 1000) {
        this.article = res.data.article
      }
    })
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
