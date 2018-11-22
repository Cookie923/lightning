<template>
  <div class="signin-calender">
    <header class="title">
      <router-link to="/">
        <span class="iconfont">&#xe7eb;</span>
      </router-link>
        每日签到
    </header>
  </div>
</template>
<script>
export default {
  name: 'SignInCalender',
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
  .signin-calender
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
</style>
