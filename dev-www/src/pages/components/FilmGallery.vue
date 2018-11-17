<template>
  <div class="gallery">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of filmList" :key="item.id">
        <img :src="item.imgUrl">
        <h3 class="film-title">{{item.title}}</h3>
        <div class="douban-score">
          豆瓣评分<span class="score">{{item.rating}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'FilmGallery',
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
      },
      filmList: [{
        id: '0001',
        title: '毒液：致命守护者',
        rating: 7.4,
        imgUrl: 'http://img5.mtime.cn/mt/2018/10/17/085012.20600355_100X140X4.jpg'
      }, {
        id: '0002',
        title: '神奇动物：格林德沃之罪',
        rating: 7.5,
        imgUrl: 'http://img5.mtime.cn/mt/2018/11/08/112801.60891528_100X140X4.jpg'
      }, {
        id: '0003',
        title: '名侦探柯南：零的执行人',
        rating: 5.9,
        imgUrl: 'http://img5.mtime.cn/mt/2018/10/17/093851.96263453_100X140X4.jpg'
      }, {
        id: '0004',
        title: '你好，之华',
        rating: 7.1,
        imgUrl: 'http://img5.mtime.cn/mt/2018/10/29/091910.64953146_100X140X4.jpg'
      }, {
        id: '0005',
        title: '无名之辈',
        rating: 8.4,
        imgUrl: 'http://img5.mtime.cn/mt/2018/09/13/113722.40019611_100X140X4.jpg'
      }, {
        id: '0006',
        title: '胡桃夹子和四个王国',
        rating: 6.1,
        imgUrl: 'http://img5.mtime.cn/mt/2018/10/17/110808.38008587_100X140X4.jpg'
      }]
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
</style>
