<template>
  <div>
    <Table border :columns="columns" :data="articles"></Table>
    <Page :total="total" @on-change="pageChange"></Page>
  </div>
</template>

<script>
import { getArticlesRes, deleteArticleRes } from '@/http'
import { mapGetters, mapActions } from 'vuex'
import filters from '../../filters'

export default {
  data() {
    return {
      articles: [],
      columns: [
        {
          title: '标题',
          key: 'title'
        },
        {
          title: '日期',
          key: 'createAt',
          render: (h, params) => {
            return <span>{filters.timestampFormat(params.row.createAt, 'YYYY.MM.DD HH:mm:ss')}</span>
          }
        },
        {
          title: '分类',
          key: 'classification',
          render: (h, params) => {
            let _id = params.row.classification
            return <tag>{this.getClassificationName(_id)}</tag>
          }
        },
        {
          title: '标签',
          key: 'category',
          render: (h, params) => {
            return params.row.category.map(i => {
              return <tag>{this.getCategoryName(i)}</tag>
            })
          }
        },
        {
          title: '编辑',
          key: 'action',
          align: 'center',
          render: (h, params) => {
            return (
              <div>
                <i-button
                  type="primary"
                  style={{ marginRight: '10px' }}
                  onClick={() => {
                    this.editArticle(params.row)
                  }}
                >
                  编辑
                </i-button>
                <i-button
                  type="error"
                  onClick={() => {
                    this.deleteArticle(params.row._id)
                  }}
                >
                  删除
                </i-button>
              </div>
            )
          }
        }
      ],
      total: 0
    }
  },
  computed: {
    ...mapGetters(['categories', 'classifications'])
  },
  methods: {
    ...mapActions(['getCategories', 'getClassifications']),
    getAtricles() {
      getArticlesRes().then(res => {
        if (res.state === 1000) {
          this.articles = res.data.articles
          this.total = res.data.total
        }
      })
    },
    getCategoryName(_id) {
      const i = this.categories.find(_ => _._id === _id)
      return i && i.name
    },
    getClassificationName(_id) {
      const i = this.classifications.find(_ => _._id === _id)
      return i && i.name
    },
    editArticle(row) {
      this.$router.push({name: 'article-edit', params: {id: row._id}})
    },
    deleteArticle(id) {
      deleteArticleRes(id)
        .then(res => {
          if (res.state === 1000) {
            this.getAtricles()
          }
        })
    },
    pageChange (page) {
    }
  },
  created() {
    this.getAtricles()
  }
}
</script>

<style lang="stylus">
.ivu-page
  text-align center
  margin-top 50px
</style>
