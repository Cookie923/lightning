<template>
  <div class="stuff-gallery">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of stuffList" :key="item.id">
        <img :src="item.imgUrl">
        <h3 class="stuff-name">{{item.name}}</h3>
        <h3 class="stuff-name s-position">{{item.position}}</h3>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'StuffGallery',
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
      stuffList: [{
        name: '文牧野',
        position: '导演',
        imgUrl: 'http://img5.mtime.cn/ph/2018/08/20/193919.93463030_96X128.jpg'
      }, {
        name: '徐峥',
        position: '饰 程勇',
        imgUrl: 'http://img5.mtime.cn/ph/2018/08/20/193919.93463030_96X128.jpg'
      }, {
        name: '王传君',
        position: '饰 吕受益',
        imgUrl: 'http://img5.mtime.cn/ph/2018/08/20/193919.93463030_96X128.jpg'
      }, {
        name: '周一围',
        position: '饰 曹斌',
        imgUrl: 'http://img5.mtime.cn/ph/2018/08/20/193919.93463030_96X128.jpg'
      }, {
        name: '谭卓',
        position: '饰 刘思慧',
        imgUrl: 'http://img5.mtime.cn/ph/2018/08/20/193919.93463030_96X128.jpg'
      }, {
        name: '章宇',
        position: '饰 黄毛彭浩',
        imgUrl: 'http://img5.mtime.cn/ph/2018/08/20/193919.93463030_96X128.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .stuff-gallery
    position: relative
    margin: .2rem
    .stuff-name
      margin-top: .1rem
      color: #333
      font-size: .25rem
    .s-position
      opacity: .6
    img
      border-radius: .07rem
</style>
