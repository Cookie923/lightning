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
        <img v-lazy="this.filmImg">
      </div>
      <div class="film-title">{{this.filmInfo.title}}</div>
      <div class="film-info">
        <div>
          <span>{{this.filmInfo.original_title}}({{this.filmInfo.year}})</span>
        </div>
        <div>
          <span>国家地区：{{this.countries}}</span>
          <span>类型：{{this.genres}}</span>
        </div>
        <div>
          <span>上映时间：{{this.pubdates}}</span>
        </div>
        <div>
          <span>语言：{{this.language}}</span>
          <span>电影片场：{{this.durations}}</span>
        </div>
      </div>
      <div class="score-button">
        <div>
          <span class="douban">豆瓣</span>
          <span class="score">{{this.rating}}</span>
        </div>
        <!-- <div>
          <span>IMDb</span>
          <span class="score">暂无</span>
        </div> -->
        <div class="button" v-if="rtype==0">想看</div>
        <div class="button button-on" v-if="rtype==1">已想看</div>
        <div class="button" v-if="rtype==0||rtype==1">看过</div>
        <div class="button button-on" v-if="rtype==2">已看过</div>
      </div>
    </div>
    <div class="film-text">
      <div>
        <h3>简介</h3>
        <p>{{this.filmInfo.summary}}</p>
      </div>
    </div>
    <div class="film-stuff">
      <h3>影人</h3>
      <stuff-gallery :director="this.filmInfo.directors" :writer="this.filmInfo.writers" :cast="this.filmInfo.casts"></stuff-gallery>
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
import { getFilmDetail } from '../../api/film-in-theaters'

export default {
  name: 'FilmDetails',
  components: {
    FilmComment,
    StuffGallery
  },
  data () {
    return {
      rtype: 0, // 默认0 想看1 看过2
      gallery_type: 1,
      filmInfo: {},
      countries: '',
      filmImg: '',
      genres: '',
      pubdates: '',
      durations: '',
      language: '',
      rating: 0
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    getFilmDetail(this.$route.query.id).then((res) => {
      this.filmInfo = res
      let countries = this.filmInfo.countries
      let genres = this.filmInfo.genres
      let pubdates = this.filmInfo.pubdates
      let durations = this.filmInfo.durations
      let language = this.filmInfo.languages
      this.filmImg = this.filmInfo.images.small
      this.genres = genres.join('/')
      this.countries = countries.join(' / ')
      this.pubdates = pubdates.join(' / ')
      this.durations = durations.toString()
      this.language = language.toString()
      this.rating = this.filmInfo.rating.average
    })
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
        height: 4.2rem
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
        margin-top: .3rem
        font-size: .24rem
        .score
          margin-right: .3rem
          font-size: .4rem
          text-shadow: .05rem .05rem .1rem #000
          color: #fff
        .douban
          padding: .03rem
          border-radius: .1rem
          background: #007722
          font-weight: bold
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
        padding: .35rem .3rem .3rem
        p
          margin-top: .2rem
          font-size: .22rem
          color: #ecf5ff
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
