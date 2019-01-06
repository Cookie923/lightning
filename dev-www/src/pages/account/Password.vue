<template>
  <div class="password">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
        修改密码
    </header>
    <div class="box">
      <div class="input-box">
        <div class="input-item">
          <el-input v-model="oldPsw" placeholder="旧密码" autofocus></el-input>
          <i class="tips el-icon-warning" v-show="oldPswWrong">旧密码不正确</i>
        </div>
        <el-input v-model="newPsw" type="password" placeholder="新密码，至少为六位（数字、字母、下划线）"></el-input>
        <div class="input-item">
          <el-input v-model="pswAgain" type="password" placeholder="确认新密码"></el-input>
          <i class="tips el-icon-warning" v-show="different">两次密码不一致</i>
        </div>
      </div>
      <div class="button">
        <el-button type="warning" :disabled="disableButtom" @click="changePsw()" round>确 定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getCookie } from '../../api/cookie.js'
export default {
  name: 'Password',
  components: {
  },
  data () {
    return {
      oldPsw: '',
      newPsw: '',
      pswAgain: '',
      disableButtom: true,
      oldPswWrong: false,
      different: false
    }
  },
  watch: {
    pswAgain () {
      if (this.newPsw !== this.pswAgain) {
        this.different = true
        this.disableButtom = true
      } else {
        this.different = false
        this.disableButtom = false
      }
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    changePsw () {
      let userInfo = JSON.parse(getCookie('userInfo'))
      axios.post('/account/password', {
        username: userInfo.username,
        oldPsw: this.oldPsw,
        newPsw: this.newPsw
      }).then((res) => {
        if (res.data.code === 3) {
          this.oldPswWrong = true
        } else if (res.data.code === 2) {
          this.$message({
            message: '密码修改成功了哟！',
            type: 'success'
          })
          window.setTimeout(this.back(), 3000)
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
      .input-item
        position: relative
        font-size: .24rem
      .tips
        position: absolute
        top: .3rem
        padding-bottom: 3rem
        right: .4rem
        z-index: 1
        color: #FDB515
</style>
