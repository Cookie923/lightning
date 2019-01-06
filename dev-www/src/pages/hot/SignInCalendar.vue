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
        :markDate=arr
        >
      </calendar>
    </div>
  </div>
</template>
<script>
import Calendar from 'vue-calendar-component'
export default {
  name: 'SignInCalendar',
  components: {
    Calendar
  },
  data () {
    return {
      arr: ['2018/11/15', '2018/11/21']
    }
  },
  methods: {
  }
}
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
    background: #FDB515
    color: #fff
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
</style>
