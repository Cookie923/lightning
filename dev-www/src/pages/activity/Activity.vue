<template>
  <div class="activity">
    <header class="title">动态</header>
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
    <div class="msg">
      <div class="comment-details">
        <div class="user-img"></div>
        用户名称
        <span>想看</span>
        <router-link to="/film-details">
          <span>《你好，之华》</span>
        </router-link>
        <span class="time">2天前</span>
      </div>
    </div>
    <div class="msg">
      <div class="comment-details">
        <div class="user-img"></div>
        用户名称
        <span>看过</span>
        <router-link to="/film-details">
          <span>《毒液：致命守护者》</span>
        </router-link>
        <span class="time">11天前</span>
      </div>
    </div>
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '.././components/BottomTab'
export default {
  name: 'Activity',
  components: {
    BottomTab
  },
  data () {
    return {
      tab: 3
    }
  },
  methods: {
    jumpToDetails () {
      this.$router.push('/comment-details')
    }
  }
}
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
