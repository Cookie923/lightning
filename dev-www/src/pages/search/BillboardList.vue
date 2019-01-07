<template>
  <div class="billboard-list">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
        {{this.$route.query.title}}
    </header>
    <film-item :billboard="list"></film-item>
  </div>
</template>

<script>
import FilmItem from './../components/FilmItem'
import { weeklyBillboard, usBillboard } from '../../api/billboard'

export default {
  name: 'BillboardList',
  components: {
    FilmItem
  },
  data () {
    return {
      list: {}
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    weekly () {
      weeklyBillboard().then((res) => {
        this.list = res
      })
    },
    us () {
      usBillboard().then((res) => {
        this.list = res
      })
    }
  },
  mounted () {
    if (this.$route.query.title === '豆瓣电影本周口碑榜') {
      this.weekly()
    }
    if (this.$route.query.title === '豆瓣电影北美票房榜') {
      this.us()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .billboard-list
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
