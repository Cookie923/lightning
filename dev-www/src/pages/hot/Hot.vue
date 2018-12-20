<template>
  <div>
    <header class="title">
      <router-link to="/calendar">
        <span class="iconfont">&#xe63c;</span>
      </router-link>
        Lighting
    </header>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of newsList" :key="item.id">
          <div @click="toNewsDetails(item.id)">
            <img class="swiper-img" :src="item.image?item.image:item.images[0].url1">
            <div class="news-title">
              <h3>{{item.title}}</h3>
              <span>{{item.title2}}</span>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="title title-text">院线热映</div>
    <div class="theatre">
      <film-gallery :theater="theaterFilm"></film-gallery>
    </div>
    <div class="title title-text comment">热门影评</div>
    <film-comment></film-comment>
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import FilmGallery from '.././components/FilmGallery'
import BottomTab from '.././components/BottomTab'
import FilmComment from '.././components/FilmComment'
import { getFilmNews } from '../../api/film-news'
import { getFilmInTheaters } from '../../api/film-in-theaters'

export default {
  name: 'Hot',
  components: {
    FilmGallery,
    BottomTab,
    FilmComment
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        speed: 1000,
        loop: true
      },
      tab: 1,
      newsList: [],
      theaterFilm: {}
    }
  },
  methods: {
    toNewsDetails (id) {
      this.$router.push({
        path: `/news-details?id=${id}`
      })
    }
  },
  mounted () {
    getFilmNews().then((res) => {
      this.newsList = res.newsList
      this.newsList.length = 5
    })
    getFilmInTheaters('北京', 0, 10).then((res) => {
      this.theaterFilm = res.subjects
    })
  }
}
</script>

<style lang="stylus" scoped>
  >>>.swiper-pagination-bullet-active
    background: #FDB515
  >>>.swiper-pagination-bullet
    width: .4rem
    height: .05rem
    border-radius: 0
  .title
    height: .74rem
    padding: 0 .1rem
    background: #f8f8f8
    text-align: center
    font-size: .4rem
    color: #2D445C
    line-height: .74rem
    .iconfont
      float: left
      font-size: .4rem
      color: #2D445C
  .wrapper
    overflow: hidden
    height: 4rem
  .swiper-img
    width: 100%
    height: 4rem
    position: relative
  .news-title
    position: absolute
    bottom: .4rem
    padding: .1rem
    color: #fff
    background: #2D445C
    opacity: 0.85
    h3
      margin-bottom: .15rem
      font-size: .35rem
      font-weight: bold
  .title-text
    font-size: .35rem
    font-weight: bold
  .comment
    text-align: left
  .theatre
    height: 3.35rem
</style>
