<template>
  <div class="my-list">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
        想看
    </header>
    <film-item></film-item>
  </div>
</template>

<script>
import FilmItem from "./../components/FilmItem"

export default {
  name: 'MyList',
  components: {
    FilmItem
  },
  data () {
    return {
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
  .my-list
    .title
      position: fixed
      top: 0
      box-sizing: border-box
      width: 100%
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
