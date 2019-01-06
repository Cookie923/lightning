<template>
  <div class="login">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
    </header>
    <div class="box">
      <h3>LIGHTNING</h3>
      <div class="input-box">
        <el-input
          v-model="username"
          placeholder="用户名"
          autofocus>
        </el-input>
        <el-input v-model="password" type="password" placeholder="密码"></el-input>
      </div>
      <div class="button">
        <el-button
          type="warning"
          round
          :disabled="disabledButtom"
          @click="login()">
          确 定
        </el-button>
      </div>
      <div class="signup">
        还没有账号？
        <span class="el-icon-d-arrow-right"></span>
        <span @click="toRegister()">新用户注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LogIn',
  components: {
  },
  data () {
    return {
      username: '',
      password: '',
      disabledButtom: true
    }
  },
  watch: {
    username () {
      this.buttonClear()
    },
    password () {
      this.buttonClear()
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    toRegister () {
      this.$router.push('/account/register')
    },
    buttonClear () {
      if (this.username !== '' && this.password !== '') {
        this.disabledButtom = false
      } else {
        this.disabledButtom = true
      }
    },
    login () {
      axios.post('/account/login', {
        username: this.username,
        password: this.password
      }).then((res) => {
        if (res.data.code === 3) {
          this.$message({
            message: '用户名不存在或密码不正确(；д；)',
            type: 'warning'
          })
        } else if (res.data.code === 2) {
          this.$message({
            message: `${res.data.userInfo.username},欢迎回来`,
            type: 'success'
          })
          window.setTimeout(this.$router.push('/account'), 4000)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .input-box>>>.el-input__inner
    border: 0
    border-bottom: .01rem solid #f1f1f1
    margin-bottom: .5rem
  .button>>>.el-button
    margin-top: .5rem
    width: 100%
  .login
    .title
      height: .74rem
      padding: 0 .1rem
      text-align: center
      font-size: .35rem
      color: #2D445C
      line-height: .74rem
      .iconfont
        float: left
        font-size: .4rem
        color: #2D445C
    .box
      margin: .35rem
      h3
        margin: 2rem 2rem 1rem 2rem
        text-align: center
      .signup
        float: right
        margin-top: .3rem
        span
          color: #FDB515
</style>
