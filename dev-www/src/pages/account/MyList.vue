<template>
  <div class="my-list">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
        {{this.$route.query.type=='wanted'?'我想看的电影':'我看过的电影'}}
    </header>
    <film-item v-if="type == 'wanted'" :list="wantedList"></film-item>
    <film-item v-if="type == 'watched'" :list="watchedList"></film-item>
  </div>
</template>

<script>
import FilmItem from './../components/FilmItem'
import { wantedAllFilm, watchedAllFilm } from '../../api/account-viewrecord.js'
export default {
  name: 'MyList',
  components: {
    FilmItem
  },
  data () {
    return {
      type: this.$route.query.type,
      wantedList: [],
      watchedList: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (this.$route.query.type === 'wanted') {
      wantedAllFilm(this.$store.state.username).then((res) => {
        this.wantedList = res.data
      })
    }else if (this.$route.query.type === 'watched') {
      watchedAllFilm(this.$store.state.username).then((res) => {
        this.watchedList = res.data
      })
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
