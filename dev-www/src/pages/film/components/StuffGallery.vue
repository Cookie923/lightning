<template>
  <div class="stuff-gallery">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of director" :key="item.id">
        <img :src="item.avatars.small">
        <h3 class="stuff-name">{{item.name}}</h3>
        <h3 class="stuff-name">{{item.name_en}}</h3>
        <h3 class="stuff-name s-position">导演</h3>
      </swiper-slide>
      <swiper-slide v-for="item of cast" :key="item.id">
        <img :src="item.avatars.small">
        <h3 class="stuff-name">{{item.name}}</h3>
        <h3 class="stuff-name">{{item.name_en}}</h3>
        <h3 class="stuff-name s-position">演员</h3>
      </swiper-slide>
      <swiper-slide v-for="item of writer" :key="item.id">
        <img :src="item.avatars.small">
        <h3 class="stuff-name">{{item.name}}</h3>
        <h3 class="stuff-name">{{item.name_en}}</h3>
        <h3 class="stuff-name s-position">编剧</h3>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'StuffGallery',
  props:['director', 'cast', 'writer'],
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
