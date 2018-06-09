<template>
  <div class="all-category">
    <span class="title">全部标签</span>
    <Table border :columns="columns" :data="categories"></Table>
    <Modal v-model="showModel" title="编辑标签" :loading="loading" @on-ok="ok" @on-cancel="cancel">
      <Form ref="form" :model="form" :rules="rules">
        <FormItem prop="categoryName">
          <Input v-model="form.categoryName"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
import { putCategoryRes, deleteCategoryRes } from '@/http'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      columns: [
        {
          title: '标签名',
          key: 'name'
        },
        {
          title: '功能',
          key: 'action',
          width: 200,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '20px'
                  },
                  on: {
                    click: () => {
                      this.edit(params.index)
                    }
                  }
                },
                '编辑'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      index: null,
      showModel: false,
      loading: true,
      form: {
        categoryName: ''
      },
      rules: {
        categoryName: [
          {
            required: true,
            message: '请输入标签名',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['categories'])
  },
  methods: {
    ...mapActions(['getCategories']),
    edit(index) {
      this.form.categoryName = this.categories[index].name
      this.index = index
      this.showModel = true
    },
    remove(index) {
      deleteCategoryRes(this.categories[index]._id).then(res => {
        if (res.state === 1000) {
          this.getCategories()
        }
      })
    },
    ok() {
      this.loading = true
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        putCategoryRes(this.categories[this.index]._id, {
          name: this.form.categoryName
        }).then(res => {
          if (res.state === 1000) {
            this.loading = false
            this.showModel = false
            this.getCategories()
          }
        })
      })
    },
    cancel() {}
  }
}
</script>

<style lang="stylus">
.all-category
  .title
    display inline-block
    color #2d8cf0
    margin-bottom 20px
</style>
