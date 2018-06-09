<template>
  <div class="add-category">
    <span class="title">新建分类</span>
    <Form ref="form" :model="form" :rules="rules">
      <FormItem prop="categoryName">
        <Input v-model="form.classificationName"></Input>
      </FormItem>
    </Form>
    <Button type="primary" @click="addClassification">新建分类</Button>
  </div>
</template>

<script>
import { postClassificationRes } from '@/http'
export default {
  data() {
    return {
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
  methods: {
    addClassification() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        postClassificationRes({ name: this.form.classificationName }).then(
          res => {
            if (res.state === 1000) {
              this.$Message.success('标签分类成功')
            } else {
              this.$Message.error(res.errMsg)
            }
          }
        )
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
