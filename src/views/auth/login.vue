<template>
  <div class="signin">
    <div class="account-wrapper">
      <div class="header">
        <img src="../../assets/images/iview.png" alt="">
        <span>Blog Admin</span>
      </div>
      <Form ref="userForm" :model="userForm" :rules="userFormRule">
        <FormItem prop="username">
          <Input type="text" v-model="userForm.username" placeholder="Username">
          <Icon type="person" :size="20" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="userForm.password" placeholder="Password">
          <Icon type="locked" :size="20" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('userForm')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { loginRes } from '@/http'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      userForm: {
        username: '',
        password: ''
      },
      userFormRule: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '密码长度不能低于6位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['setUserInfo', 'getCategories', 'getClassifications']),
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (!valid) {
          return
        }
        loginRes(this.userForm)
          .then(res => {
            if (res.state === 1000) {
              let { token, user } = res.data
              let info = { jwt: token, ...user }
              this.setUserInfo(info)
              this.getCategories()
              this.getClassifications()
              this.$router.push({ name: 'article-list' })
            }
          })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.signin
  position absolute
  top 0
  bottom 0
  width 100%
  background url('../../assets/images/login-splash-bg-port.jpg') no-repeat center center
  background-size cover
  .account-wrapper
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    width 320px
    height 310px
    margin auto
    padding 36px
    background-color #fff
    box-shadow 0 0 100px rgba(0, 0, 0, 0.08)
    border-radius 4px
    .header
      text-align center
      margin-bottom 24px
      img
        width 40px
        height 40px
        vertical-align middle
      span
        font-size 16px
        display inline-block
        vertical-align middle
        font-weight bold
</style>
