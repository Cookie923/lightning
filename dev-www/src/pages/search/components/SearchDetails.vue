<template>
  <transition name="fade">
    <div class="search-details">
      <div class="film-item" v-for="film of searchResult.subjects" :key="film.id" @click="jumpToDetail(film.id)">
        <div>
          <img v-lazy="replaceUrl(film.images.small)">
        </div>
        <div class="detail-box">
          <h3>{{film.title}}</h3>
          <span class="block">{{film.rating.average?film.rating.average:'暂无评分'}}</span>
          <span class="block">{{film.pubdates[0]}}</span>
          <span class="block">
            <span class="genre" v-for="genre of film.genres" :key="genre.id">{{genre}}</span>
          </span>
          <span class="block">{{film.directors[0]&&film.directors[0].name}}</span>
          <span>
            <span class="genre" v-for="cast of film.casts" :key="cast.id">{{cast&&cast.name}}</span>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SearchDetails',
  props: ['searchResult'],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    replaceUrl (srcUrl) {
      if (srcUrl !== undefined) { // 图片防盗链处理
        return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''))
      }
    },
    jumpToDetail (id) {
      this.$router.push({
        path: `/film-details?id=${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0
  .search-details
    padding-top: .1rem
    .film-item
      display: flex
      height: 1.8rem
      border-bottom: .01rem solid #f8f8f8
      img
        height: 1.5rem
        width: 1.14rem
        margin: .1rem .3rem
        background: #333
      .detail-box
        width: 100%
        margin: .1rem .3rem .1rem 0
        h3
          margin: .2rem 0
          font-weight: bold
          font-size: .28rem
          color: #2d445c
        span
          color: #777
          font-size: .24rem
          .genre:after
            content: ' '
         .block:after
           content: ' /'
</style>
