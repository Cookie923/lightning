<template>
  <div class="login">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
    </header>
    <div class="box">
      <h3>LIGHTNING</h3>
      <div class="input-box">
        <el-input v-model="id" placeholder="账号" autofocus></el-input>
        <el-input v-model="psw" placeholder="密码"></el-input>
        <el-input v-model="newid" placeholder="账号" autofocus></el-input>
        <el-input v-model="newpsw" placeholder="密码"></el-input>
        <el-input v-model="newpswa" placeholder="确认密码" autofocus></el-input>
      </div>
      <div class="button">
        <el-button type="warning" round>确 定</el-button>
        <el-button type="warning" round>注 册</el-button>
      </div>
      <div class="signup">
        还没有账号？<span class="el-icon-d-arrow-right"></span>
        <span>新用户注册</span></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LogIn',
  components: {
  },
  data () {
    return {
      id: '',
      psw: '',
      newid: '',
      newpsw: '',
      newpswa: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
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
