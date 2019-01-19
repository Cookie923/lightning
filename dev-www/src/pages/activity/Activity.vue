<template>
  <div class="activity">
    <header class="title">动态</header>
    <div v-for='(dynamic, index) of userDynamics' :key="dynamic._id">
      <div class="msg" v-if="dynamic.rtype">
        <div class="comment-details">
          <div class="user-img"></div>
          {{dynamic.username}}
          <span>{{dynamic.rtype&&dynamic.rtype==1?'想看':'看过'}}</span>
          <span @click="jumpToDetails(dynamic.filmid,dynamic.rtype)">《{{dynamic.filminfo&&dynamic.filminfo.title}}》</span>
          <span class="time">{{time[index]}}</span>
          <div class="user-comment" v-if="dynamic.rtype==2">
            <el-rate
              class="rate-box"
              v-model="dynamic.rating"
              disabled
              text-color="#ff9900"
              >
            </el-rate>
            <p>{{dynamic.comment}}</p>
          </div>
        </div>
      </div>
      <div class="msg comment" v-if="dynamic.atype">
        <div class="comment-details">
          <div class="user-img"></div>
          {{dynamic.username}}
          <span>收藏了</span>
          <span class="time">{{time[index]}}</span>
          <div class="user-comment" @click="jumpToDetails(dynamic.aid,dynamic.atype)">
            <film-comment :collections="dynamic"></film-comment>
          </div>
        </div>
      </div>
    </div>
    <div class="msg" v-if="userDynamics.length==0">
      <el-button class="button" round @click="tologIn()">登录 / 注册</el-button>
      <span class="tips">站长提示：登录后才可以查看lightning内动态哟~ヾ(･ω･`｡)</span>
    </div>
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import FilmComment from '../components/FilmComment'
import BottomTab from '.././components/BottomTab'
import { userDynamic } from '../../api/dynamic'
const m = require('moment')
m.locale('zh-cn')
export default {
  name: 'Activity',
  components: {
    FilmComment,
    BottomTab
  },
  data () {
    return {
      tab: 3,
      username: this.$store.state.username,
      userDynamics: [],
      time: []
    }
  },
  methods: {
    tologIn () {
      this.$router.push('/account/login')
    },
    jumpToDetails (id, type) {
      if (type == 1 || type == 2) {
        this.$router.push(`/film-details?id=${id}`)
      }else if (type == 'news') {
        this.$router.push(`/news-details?id=${id}`)
      } else {
        this.$router.push(`/comment-details?id=${id}`)
      }
    }
  },
  mounted () {
    if (this.username !== '') {
      userDynamic(this.username).then((res) => {
        this.userDynamics = res.data
        let now
        this.userDynamics.forEach(time => {
          now = m(time.create_time,'YYYY-MM-DD HH:mm').fromNow()
          now = now.replace(/\s+/g,"")
          this.time.push(now)
        })
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
  >>> .el-rate__icon
    font-size: .2rem 
  >>> .el-rate
    height: .2rem
  .activity
    header
      height: .74rem
      padding: 0 .1rem
      background: #f8f8f8
      text-align: center
      font-size: .35rem
      color: #2D445C
      line-height: .74rem
    .msg
      padding: .4rem .25rem
      border-bottom: .2rem solid #f8f8f8
    .comment-details
      width: 100%
      margin-bottom: .15rem
      line-height: .4rem
      font-size: .23rem
      .user-img
        float: left
        width: .4rem
        height: .4rem
        border-radius: .4rem
        margin-right: .1rem
        background: #333
      span
        margin-left: .15rem
        color: #333
        font-size: .27rem
      .time
        float: right
        color: #FDB515
        font-size: .23rem
      .user-comment
        margin-top: .1rem
        padding: .1rem .2rem
        border-radius: .2rem
        background: #fffafa
        p
          color: #777
    .comment-text h3
      font-size: .32rem
      font-weight: bold
      margin-bottom: .15rem
    .comment-text span
      font-size: .27rem
    .comment-img
      width: 100%
      height: 1.6rem
      margin-top: .1rem
      background: #f8f8f8
    .comment-data
      float: right
      .iconfont
        margin-left: .2rem
  .button
    display: block
    margin: 0.1rem auto
  .tips
    float: right
    padding: .01rem
    background: #fffafa
    color: #FDB515
    font-size: .2rem
  // .msg:last-child
  //   margin-bottom: .9rem
</style>
