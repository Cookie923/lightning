<template>
  <div class="account">
    <div class="user" v-if="sign==1">
      <div class="user-img">
        <img class="avatar" src="../../assets/img/lightning.png">
      </div>
      <div class="user-name">{{this.username}}</div>
    </div>
    <div class="user" v-if="sign!==1">
      <el-button class="button" type="warning" round @click="tologIn()">登录 / 注册</el-button>
    </div>
    <div class="title">
      观影记录
      <el-switch
        @change="change"
        v-if="sign==1"
        class="switch"
        v-model="value"
        active-text="看过"
        active-color="#FDB515"
        inactive-text="想看"
        inactive-color="#FDB515">
      </el-switch>
    </div>
    <film-gallery 
      v-if="sign==1&&!value" 
      class="film-gallery" 
      :tab="tab"
      :theater="wantedList">
    </film-gallery>
    <film-gallery 
      v-if="sign==1&&value" 
      class="film-gallery" 
      :tab="tab"
      :theater="watchedList">
    </film-gallery>
    <div class="title" @click="jumpTocollection()">我的收藏</div>
    <div class="title">我的影评</div>
    <bottom-tab :tab="tab"></bottom-tab>
    <div class="button-box" v-if="sign==1">
      <el-button class="button" type="warning" round @click="jumpToPassword()">修改密码</el-button>
      <el-button class="button" type="warning" round @click="quitlogin()">退出登录</el-button>
    </div>
  </div>
</template>

<script>
import FilmGallery from '.././components/FilmGallery'
import BottomTab from '.././components/BottomTab'
import { getCookie, deleteCookie } from '../../api/cookie.js'
import { wantedAllFilm, watchedAllFilm } from '../../api/account-viewrecord.js'
import { mapMutations } from 'vuex'
export default {
  name: 'Account',
  components: {
    FilmGallery,
    BottomTab
  },
  data () {
    return {
      tab: 4,
      value: false,// 想看false 看过true
      sign: 1,
      username: JSON.parse(getCookie('userInfo')).username,
      wantedList: [],
      watchedList: []
    }
  },
  methods: {
    change (val) {
      if (val) {
        this.watchedList = []
        watchedAllFilm(this.username).then((res) => {
          res.data.forEach(film => this.watchedList.push(film.filminfo))
        })
      }
    },
    jumpTocollection () {
      this.$router.push('/account/mycollection')
    },
    jumpToPassword () {
      this.$router.push('/account/password')
    },
    tologIn () {
      this.$router.push('/account/login')
    },
    quitlogin () {
      deleteCookie('userInfo')
      this.sign = 0
    },
    ...mapMutations({
      setUsername: 'SET_USERNAME'
    })
  },
  mounted () {
    if (this.sign === 1) {
      this.setUsername(this.username)
      wantedAllFilm(this.username).then((res) => {
        res.data.forEach(film => this.wantedList.push(film.filminfo))
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  >>>.el-switch__label.is-active
    color: #FDB515
  >>>.el-switch__label span
    font-size: .23rem
  .account
    .user
      display: flex
      justify-content: center
      align-items: center
      height: 3.4rem
      border: .05rem solid #FDB515
      background: #FDB515
      .user-img
        width: 2rem
        height: 2rem
        border-radius: 2rem
        background: #f8f8f8
        .avatar
          width: 100%
      .user-name
        position: absolute
        margin-top: 1.3rem
        color: #fff
        font-size: .3rem
        font-weight: bold
    .title
      height: .74rem
      margin: .15rem 0
      padding: 0 .1rem
      background: #f8f8f8
      text-align: center
      font-size: .27rem
      color: #2D445C
      line-height: .74rem
      .switch
        hidden: overflow
        position: absolute
        right: 0.1rem
        margin-top: .15rem
    .button-box
      width: 100%
      .button
        display: block
        margin: 0.1rem auto
    .film-gallery
      height: 3.38rem
</style>
