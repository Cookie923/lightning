<template>
  <div class="my-collection">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
        我的收藏
    </header>
    <film-comment class="filmcomment" :collection="myList"></film-comment>
  </div>
</template>

<script>
import FilmComment from './../components/FilmComment'
import { myCollection } from '../../api/account-viewrecord'

export default {
  name: 'MyCollection',
  components: {
    FilmComment
  },
  data () {
    return {
      myList: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    myCollection(this.$store.state.username).then((res) => {
      this.myList = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
  .my-collection
    .title
      position: fixed
      top: 0
      z-index: 3
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
    .filmcomment
      margin-top: .74rem
</style>
