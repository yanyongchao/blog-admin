<template>
  <div class="all-category">
    <span class="title">全部分类</span>
    <Table border :columns="columns" :data="classifications"></Table>
    <Modal v-model="showModel" title="编辑分类" :loading="loading" @on-ok="ok" @on-cancel="cancel">
      <Form ref="form" :model="form" :rules="rules">
        <FormItem prop="classificationName">
          <Input v-model="form.classificationName"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
import { deleteClassificationRes, putClassificationRes } from '@/http'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      columns: [
        {
          title: '分类名',
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
        classificationName: ''
      },
      rules: {
        classificationName: [
          {
            required: true,
            message: '请输入分类名',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['classifications'])
  },
  methods: {
    ...mapActions(['getClassifications']),
    edit(index) {
      this.form.classificationName = this.classifications[index].name
      this.index = index
      this.showModel = true
    },
    remove(index) {
      deleteClassificationRes(this.classifications[index]._id).then(res => {
        if (res.state === 1000) {
          this.getClassifications()
        }
      })
    },
    ok() {
      this.loading = true
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        putClassificationRes(this.classifications[this.index]._id, {
          name: this.form.classificationName
        }).then(res => {
          if (res.state === 1000) {
            this.loading = false
            this.showModel = false
            this.getClassifications()
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
