<template>
  <div class="gallery">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of theater" :key="item.id">
        <div @click="jumpToDetail(item.id)">
          <img :src="item.images.small">
          <h3 class="film-title">{{item.title}}</h3>
          <div class="douban-score" v-show="item.rating.average">
            豆瓣评分<span class="score">{{item.rating.average}}</span>
          </div>
          <div class="douban-score new" v-show="!item.rating.average">
            暂无评分
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-if="tab==4">
        <div class="all" @click="jumpToList()">全部影片<i class="el-icon-d-arrow-right"></i></div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'FilmGallery',
  props: ['tab', 'theater'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 3.2,
        spaceBetween: 1,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    jumpToList () {
      this.$router.push('/account/mylist')
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
  .gallery
    position: relative
    margin: .2rem
    .film-title
      margin-top: .1rem
      color: #333
      font-size: .25rem
    .douban-score
      position: absolute
      top: 2.5rem
      padding: .05rem
      border-radius: .1rem
      color: #fff
      background: #FDB515
      opacity: 0.95
      .score
        margin-left: .1rem
    .douban-score.new
        background: #2D445C
    .all
      height: 2.8rem
      border: .05rem dotted #f8f8f8
      text-align: center
      line-height: 2.8rem
      color: #FDB515
    img
      width: 2rem
      height: 2.8rem
      border-radius: .07rem
</style>
