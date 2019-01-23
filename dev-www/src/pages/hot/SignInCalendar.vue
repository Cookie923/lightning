<template>
  <div class="signin-calendar">
    <header class="title">
      <router-link to="/">
        <span class="iconfont">&#xe7eb;</span>
      </router-link>
        每日签到
    </header>
    <div class="calendar">
      <calendar
        v-show="!hasLogin"
        :markDate=arr
        >
      </calendar>
      <div class="checkin" v-show="!ischeck&&!hasLogin" @click="checkin">今日打卡</div>
      <div class="checkin checked" v-show="ischeck">已打卡</div>
      <div class="login" v-show="hasLogin">
        <el-button class="button" round @click="tologIn()">登录 / 注册</el-button>
      </div>
      <div class="checkcount">
         <span class="hint" v-show="!ischeck&&!hasLogin"><div class="dotte"></div>已打卡</span>
        <span v-show="ischeck">累计打卡{{arr.length}}天了哟φ(゜▽゜*)♪</span>
        <span v-show="!ischeck&&!hasLogin">∑(っ °Д °;)っ什么?!你今天还没有打卡？</span>
        <span v-show="hasLogin">站长提示：登录后才可以打卡lightning哟~ヾ(･ω･`｡)</span>
      </div>
    </div>
  </div>
</template>
<script>
import Calendar from 'vue-calendar-component'
import { inquireCheckin, checkIn } from '../../api/day-check'
export default {
  name: 'SignInCalendar',
  components: {
    Calendar
  },
  data () {
    return {
      arr: [],
      ischeck: false,
      hasLogin: true
    }
  },
  methods: {
    tologIn () {
      this.$router.push('/account/login')
    },
    checkin () {
      checkIn(this.$store.state.username)
      this.ischeck = true
      this.arr.push(this.$moment().format('YYYY/MM/DD'))
    }
  },
  mounted () {
    if (this.$store.state.username !== '') {
      this.hasLogin = false
      inquireCheckin(this.$store.state.username).then((res) => {
        this.arr = res.data.checkin
        let today = this.arr[this.arr.length-1]
        if(today==this.$moment().format('YYYY/MM/DD')){
          this.ischeck = true
        }
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
  .calendar>>>.wh_content_all
    background: #fff
  .calendar>>>.wh_content_item
    color: #666
  .calendar>>>.wh_top_changge li
    color: #666
  .calendar>>>.wh_jiantou1
    border-top: .05rem solid #666
    border-left: .05rem solid #666
  .calendar>>>.wh_jiantou2
    border-top: .05rem solid #666
    border-right: .05rem solid #666
  .calendar>>>.wh_content_item .wh_isToday
    background: #fff
    border-radius: .5rem
    border: .05rem solid #FDB515
  .calendar>>>.wh_content_item .wh_chose_day
    background: #fff
    color: #666
  .calendar>>>.wh_content_item .wh_isMark
    background: #FDB515
    color: #fff
  .signin-calendar
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
    .calendar
      margin: .1rem
      .checkin
        margin: .3rem auto
        width: 2.6rem
        height: .7rem
        border-radius: .16rem
        line-height: .7rem
        font-size: .3rem
        color: #fff
        text-align:center
        background: #FDB515
      .checked
        opacity: .5
      .checkcount
        float: right
        margin-right: .2rem
        color: #FDB515
        font-size: .2rem
        .hint
          margin-right: 2rem
          color: #2D445C
          .dotte
            display: inline-block
            width: .2rem
            height: .2rem
            margin-right: .1rem
            line-height: .2rem
            border-radius: .2rem
            background: #FDB515
      .login
        width: 2rem
        margin: 2rem auto 0.3rem
</style>
