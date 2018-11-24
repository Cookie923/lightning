<template>
  <div class="password">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
        修改密码
    </header>
    <div class="box">
      <div class="input-box">
        <el-input v-model="oldpsw" placeholder="旧密码" autofocus></el-input>
        <el-input v-model="newpsw" placeholder="新密码"></el-input>
        <el-input v-model="pswagain" placeholder="确认新密码"></el-input>
      </div>
      <div class="button">
        <el-button type="warning" round>确 定</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Password',
  components: {
  },
  data () {
    return {
      oldpsw: '',
      newpsw: '',
      pswagain: ''
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
    margin-bottom: .3rem
  .button>>>.el-button
    width: 100%
  .password
    .title
      height: .74rem
      padding: 0 .1rem
      background: #FDB515
      text-align: center
      font-size: .35rem
      color: #fff
      line-height: .74rem
      .iconfont
        float: left
        font-size: .4rem
        color: #fff
    .box
      margin: .35rem
</style>
