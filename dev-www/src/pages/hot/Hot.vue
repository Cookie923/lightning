<template>
  <div>
    <header class="title">
      <span class="iconfont">&#xe63c;</span>
        Lighting
    </header>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of newsList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
        <div class="news-title">
          <h3>{{item.newsTitle}}</h3>
          <span>{{item.newsNote}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    <div class="title title-text">院线热映</div>
    <div class="theatre">
      <film-gallery></film-gallery>
    </div>
    <div class="title title-text comment">热门影评</div>
    <film-comment></film-comment>
    <bottom-tab class="bottom-tab"></bottom-tab>
  </div>
</template>

<script>
import FilmGallery from '.././components/FilmGallery'
import BottomTab from '.././components/BottomTab'
import FilmComment from '.././components/FilmComment'
import axios from 'axios'
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
      newsList: [{
        id: '0001',
        imgUrl: 'http://img5.mtime.cn/CMS/News/2018/11/16/101307.24959458_620X620.jpg',
        newsTitle: '“毒液”“神奇动物2”今日争夺票房冠军',
        newsNote: '《无名之辈》获第三 《柯南》累计1.04亿'
      }, {
        id: '0002',
        imgUrl: 'http://img5.mtime.cn/CMS/News/2018/11/16/212251.52066548_620X620.jpg',
        newsTitle: '"无敌破坏王2"上海迪士尼举办首映式',
        newsNote: '口碑爆炸想象力天马行空 彩蛋集结眼花缭乱'
      }, {
        id: '0003',
        imgUrl: 'http://img5.mtime.cn/CMS/News/2018/11/17/103545.31986554_620X620.jpg',
        newsTitle: '斯卡斯加德亮相"哥斯拉大战金刚"片场',
        newsNote: '“怪兽宇宙”第四部正热拍中 2020年上映'
      }, {
        id: '0004',
        imgUrl: 'http://img5.mtime.cn/CMS/News/2018/11/17/035237.51963872_620X620.jpg',
        newsTitle: '人生和电影不同，人生辛苦多了',
        newsNote: '纪念《天堂电影院》上映30周年'
      }]
    }
  },
  methods: {
    getHotInfo () {
      axios.get('/api/hotInfo.json')
        .then(this.getHotInfoSucc)
    },
    getHotInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHotInfo()
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
  .swiper-img
    width: 100%
    height: 4rem
    position: relative
  .news-title
    position: absolute
    bottom: .4rem
    padding: .1rem
    color: #fff
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
    height: 3.5rem
  .bottom-tab
    position: fixed
    overflow: hidden
    bottom: 0
    width: 100%
    z-index: 1
    border-top: .01rem solid #f8f8f8
    background: #fff
</style>
