<template>
  <div class="activity">
    <header class="title">动态</header>
    <div v-for='(dynamic, index) of userDynamics' :key="dynamic._id">
      <div class="msg" v-if="dynamic.rtype">
        <div class="comment-details">
          <div class="user-img"></div>
          {{dynamic.username}}
          <span>{{dynamic.rtype&&dynamic.rtype==1?'想看':'看过'}}</span>
          <router-link to="/film-details">
            <span>《{{dynamic.filminfo&&dynamic.filminfo.title}}》</span>
          </router-link>
          <span class="time">{{time[index]}}</span>
        </div>
      </div>
    </div>
    <div class="msg comment" @click="jumpToDetails()">
      <div class="comment-details">
        <div class="user-img"></div>
        用户名称
        <span>发布了</span>
        <span class="time">1分56秒前</span>
      </div>
      <div class="comment-text">
        <h3>影评标题</h3>
        <span>影评内容</span>
        <div class="comment-img">图</div>
      </div>
      <div class="comment-data">
        <span class="iconfont">&#xe71b;</span>8
        <span class="iconfont">&#xe66b;</span>12
      </div>
    </div>
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '.././components/BottomTab'
import { userDynamic } from '../../api/dynamic'
const m = require('moment')
m.locale('zh-cn')
export default {
  name: 'Activity',
  components: {
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
    jumpToDetails () {
      this.$router.push('/comment-details')
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
      height: .4rem
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
</style>
