<template>
  <div class="login">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
    </header>
    <div class="box">
      <h3>LIGHTNING</h3>
      <div class="input-box">
        <el-input v-model="username" placeholder="用户名" autofocus @blur="tipsName()">
        </el-input>
        <i class="tips tips-name el-icon-warning" v-show="usernameEmpty">用户名不能为空</i>
        <i
          class="tips tips-name el-icon-warning"
          v-show="usernameExisted">用户名已存在</i>
        <el-input v-model="password" placeholder="密码" type="password" @blur="tipsPwd()"></el-input>
        <i class="tips tips-pwd el-icon-warning" v-show="pwdEmpty">密码不能为空</i>
        <el-input v-model="repassword" placeholder="确认密码" type="password" @blur="tipsRepwd()"></el-input>
        <i class="tips tips-repwd el-icon-warning" v-show="repwdEmpty">密码不能为空</i>
        <i class="tips tips-repwd el-icon-warning" v-show="different">两次密码不一致</i>
      </div>
      <div class="button">
        <el-button type="warning" :disabled="disabledButtom" round @click="register()">注 册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  components: {
  },
  data () {
    return {
      username: '',
      password: '',
      repassword: '',
      usernameEmpty: false,
      usernameExisted: false,
      pwdEmpty: false,
      repwdEmpty: false,
      different: false,
      disabledButtom: true
    }
  },
  watch: {
    username () {
      this.buttonClear()
    },
    password () {
      this.buttonClear()
    },
    repassword () {
      this.buttonClear()
    }
  },
  methods: {
    // 返回
    back () {
      this.$router.go(-1)
    },
    // 注册
    register () {
      axios.post('/account/register', {
        username: this.username,
        password: this.password,
      }).then((response) => {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
      // this.$router.push('/account')
    },
    tipsName () {
      if (this.username === '') {
        this.usernameEmpty = true
      } else {
        this.usernameEmpty = false
      }
    },
    tipsPwd () {
      if (this.password === '') {
        this.pwdEmpty = true
      } else {
        this.pwdEmpty = false
        if (this.password !== this.repassword && this.repassword !== '') {
          this.different = true
        } else {
          this.different = false
        }
      }
    },
    tipsRepwd () {
      if (this.repassword === '') {
        this.repwdEmpty = true
        this.different = false
      } else {
        this.repwdEmpty = false
        if (this.password !== this.repassword && this.password !== '' && this.repassword !== '') {
          this.different = true
        } else {
          this.different = false
        }
      }
    },
    // 判断可否点击注册按钮
    buttonClear () {
      if (this.username !== '' && this.password !== '' && this.repassword !== '' && this.repassword === this.password) {
        this.disabledButtom = false
      } else {
        this.disabledButtom = true
      }
    }
  },
  mounted () {
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
      .tips
        position: absolute
        margin-left: .1rem
        z-index: 1
        color:  #FDB515
      .tips-name
        top: 4.35rem
        right: .5rem
      .tips-pwd
        top: 5.6rem
        right: .5rem
      .tips-repwd
        top: 6.9rem
        right: .5rem
</style>
