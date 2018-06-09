<template>
  <div class="article">
    <span class="title">{{type===1?'新增文章':'编辑文章'}}</span>
    <Form ref="form" :model="form" :rules="rules">
      <FormItem prop="title">
        <Input v-model="form.title" placeholder="请输入文章标题"></Input>
      </FormItem>
      <FormItem prop="classification">
        <Select v-model="form.classification" placeholder="请选择文章分类">
          <Option v-for="(item, index) in classifications" :value="item._id" :key="index">{{item.name}}</Option>
        </Select>
      </FormItem>
      <FormItem prop="desc">
        <Input v-model="form.desc" type="textarea" placeholder="请输入文章描述"></Input>
      </FormItem>
      <FormItem prop="category">
        <Select v-model="form.category" multiple placeholder="请选择文章标签">
          <Option v-for="(item, index) in categories" :value="item._id" :key="index">{{item.name}}</Option>
        </Select>
      </FormItem>
      <FormItem class="editor-form-item" prop="content">
        <mavon-editor v-model="form.content" :ishljs = "true" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleArticle">{{type===1?'新建文章':'编辑文章'}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    type: Number,
    data: Object
  },
  data() {
    const validateCategory = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('请选择文章标签'))
      } else {
        callback()
      }
    }
    return {
      form: {
        title: '',
        desc: '',
        category: [],
        content: '',
        classification: ''
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入文章标题',
            trigger: 'blur'
          }
        ],
        desc: [
          {
            required: true,
            message: '请输入文章描述',
            trigger: 'blur'
          }
        ],
        category: [
          {
            validator: validateCategory,
            required: true,
            trigger: 'change'
          }
        ],
        content: [
          {
            required: true,
            message: '请输入文章正文',
            trigger: 'blur'
          }
        ],
        classification: [
          {
            required: true,
            message: '请选择文章分类',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['categories', 'classifications'])
  },
  methods: {
    handleArticle() {
      this.$refs.form.validate(valid => {
        if (!valid) return
        if (this.type === 1) {
          this.$emit('add-article', this.form)
        } else {
          this.$emit('edit-article', this.form)
        }
      })
    }
  },
  watch: {
    data(val) {
      let { category, classification, content, desc, title } = val
      this.form = {
        category,
        classification,
        content,
        desc,
        title
      }
    }
  }
}
</script>

<style lang="stylus">
.article
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
