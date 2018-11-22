<template>
  <div class="film-details">
    <header class="title">
      <span class="iconfont" @click="back()">&#xe7eb;</span>
      <span>电影</span>
      <el-dropdown trigger="click">
        <span class="iconfont">&#xe632;</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="iconfont">&#xe652;</i>微信</el-dropdown-item>
          <el-dropdown-item>
            <i class="iconfont">&#xe655;</i>朋友圈</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </header>
    <div class="film-info-box">
      <div class="film-img">
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.webp">
      </div>
      <div class="film-title">我不是药神</div>
      <div class="film-info">
        <div>
          <span>国家地区：中国大陆</span>
          <span>类型：剧情/戏剧</span>
        </div>
        <div>
          <span>上映时间：2018-07-05(中国大陆)</span>
          <span>电影片场：117分钟</span>
        </div>
      </div>
      <div class="score-button">
        <div class="score">豆瓣： 9.0</div>
        <div class="score">IMDb： 8.2</div>
        <div class="button" v-if="rtype==0">想看</div>
        <div class="button button-on" v-if="rtype==1">已想看</div>
        <div class="button" v-if="rtype==0||rtype==1">看过</div>
        <div class="button button-on" v-if="rtype==2">已看过</div>
      </div>
    </div>
    <div class="film-text">
      <div>
        <h3>简介</h3>
        <p>普通中年男子程勇（徐峥 饰）经营着一家保健品店，失意又失婚。不速之客吕受益（王传君 饰）的到来，让他开辟了一条去印度买药做“代购”的新事业，虽然困难重重，但他在这条“买药之路”上发现了商机，一发不可收拾地做起了治疗慢粒白血病的 </p>
      </div>
    </div>
    <div class="film-stuff">
      <h3>影人</h3>
      <stuff-gallery></stuff-gallery>
    </div>
    <div class="film-comment-box">
      <h3>影评</h3>
      <film-comment :gtype="gallery_type"></film-comment>
    </div>
  </div>
</template>
<script>
import FilmComment from '.././components/FilmComment'
import StuffGallery from './components/StuffGallery'
export default {
  name: 'FilmDetails',
  components: {
    FilmComment,
    StuffGallery
  },
  data () {
    return {
      rtype: 2, // 默认0 想看1 看过2
      gallery_type: 1
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  >>>.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover
    background-color: #f8f4ec
    color: #FDB515
  .film-details
    .title
      display: flex
      justify-content: space-between
      height: .74rem
      padding: 0 .1rem
      background: #2d445c
      text-align: center
      font-size: .35rem
      color: #fff
      line-height: .74rem
      .iconfont
        font-size: .4rem
        color: #fff
    .film-info-box
      display: flex
      flex-flow: column
      align-items: center
      height: 6.4rem
      background: #2D445C
      .film-img img
        width: 3rem
        border-radius: .2rem
        box-shadow: .05rem .05rem 1rem #000
      .film-title
        margin: .2rem 0 .1rem
        color: #fff
        font-size: .35rem
      .film-info
        color: #949494
        text-align: center
        font-size: .22rem
        div span
          display: inline-block
          margin: .03rem .05rem
      .score-button
        display: flex
        align-items: center
        height: 100%
        color: #f8f8f8
        font-size: .27rem
        .score
          margin-right: .3rem
        .button
          width: 1.5rem
          height: .5rem
          margin-left: .3rem
          background: #FDB515
          border-radius: .1rem
          line-height: .5rem
          text-align: center
        .button-on
          opacity: .5
    .film-text
      width: 100%
      background: #2D445C
      color: #f8f8f8
      div
        padding: .1rem .3rem .3rem
        p
          margin-top: .2rem
          font-size: .22rem
          line-height: .3rem
    .film-stuff
      margin-bottom: .3rem
      h3
        padding: .3rem .3rem .1rem .3rem
        font-weight: bold
    .film-comment-box
      margin: .1rem
      padding: .2rem
      background: #33333317
      border-radius: .15rem
      h3
        color: #333
        font-weight: bold
</style>
