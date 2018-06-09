<template>
  <div class="add-category">
    <span class="title">新建标签</span>
    <Form ref="form" :model="form" :rules="rules">
      <FormItem prop="categoryName">
        <Input v-model="form.categoryName"></Input>
      </FormItem>
    </Form>
    <Button type="primary" @click="addCategory">新建标签</Button>
  </div>
</template>

<script>
import { postCategoryRes } from '@/http'
export default {
  data() {
    return {
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
  methods: {
    addCategory() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        postCategoryRes({ name: this.form.categoryName }).then(res => {
          if (res.state === 1000) {
            this.$Message.success('标签新建成功')
          } else {
            this.$Message.error(res.errMsg)
          }
        })
      })
    }
  }
}
</script>

<style lang="stylus">
.add-category
  .title
    display inline-block
    color #2d8cf0
    margin-bottom 10px
</style>
