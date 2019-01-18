<template>
  <div class="film-details">
    <mark-dialog 
      @openDialog="dialogShow" 
      v-show="dialog" 
      @rtype="rtypeChange" 
      :rtype="rtype"
      :filmInfo="filmInfo"
    ></mark-dialog>
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
        <img v-lazy="replaceUrl(this.filmImg)">
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
        <div class="button" v-if="rtype==0" @click="wanted">想看</div>
        <div class="button button-on" v-if="rtype==1" @click="openDialog">已想看</div>
        <div class="button" v-if="rtype==0" @click="watched">看过</div>
        <div class="button button-on" v-if="rtype==2" @click="openDialog">已看过</div>
      </div>
    </div>
    <div class="film-text">
      <div>
        <h3>简介</h3>
        <p>{{this.filmInfo.summary}}</p>
      </div>
    </div>
    <div class="my-comment" v-if="rtype==2">
      <h3>我的影评</h3>
      <el-rate
          class="rate-box"
          v-model="myRating"
          disabled
          text-color="#ff9900"
          >
        </el-rate>
      <p>{{myComment}}</p>
    </div>
    <div class="film-stuff">
      <h3>影人</h3>
      <stuff-gallery :director="this.filmInfo.directors" :writer="this.filmInfo.writers" :cast="this.filmInfo.casts"></stuff-gallery>
    </div>
    <div class="film-comment-box">
      <h3>影评</h3>
      <film-comment :comments="filmInfo.popular_reviews" :commentnum="filmInfo.reviews_count"></film-comment>
    </div>
  </div>
</template>

<script>
import FilmComment from '.././components/FilmComment'
import StuffGallery from './components/StuffGallery'
import MarkDialog from './components/MarkDialog'
// import { mapMutations } from 'vuex'
import { getFilmDetail } from '../../api/film-in-theaters'
import { inquireView, wantedFilm } from '../../api/film-viewrecord'

export default {
  name: 'FilmDetails',
  components: {
    FilmComment,
    StuffGallery,
    MarkDialog
  },
  data () {
    return {
      rtype: 0, //默认0 想看1 看过2
      gallery_type: 1,
      filmInfo: {},
      countries: '',
      filmImg: '',
      genres: '',
      pubdates: '',
      durations: '',
      language: '',
      rating: 0,
      dialog: false,
      myRating: 0,
      myComment: ''
    }
  },
  watch: {
    dialog () {
      this.inquireViewrecord()
    }
  },
  // computed: {
  //   rtype () {
  //     return this.$store.state.curFilmRtype
  //   }
  // },
  methods: {
    replaceUrl (srcUrl) {
      if (srcUrl !== undefined) { // 图片防盗链处理
        return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''))
      }
    },
    back () {
      this.$router.go(-1)
    },
    dialogShow (msg) {
      this.dialog = msg
    },
    watched () {
      this.dialog = true
    },
    rtypeChange (count) {
      this.rtype = count
    },
    openDialog () {
      this.dialog = true
    },
    wanted () {
      let username = this.$store.state.username
      let filmid = this.$route.query.id
      let filminfo = this.filmInfo
      wantedFilm(username, filmid, filminfo).then((res) => {
        this.rtype = res.rtype
      })
    },
    inquireViewrecord () {
      var that = this
      inquireView(that.$store.state.username, that.$route.query.id).then((res) => {
        that.rtype = res.rtype
        if (that.rtype === 2) {
          that.myComment = res.comment
          that.myRating = res.rating
        }
      })
    }
    // ...mapMutations({
    //   setUsername: 'SET_USERNAME'
    // })
  },
  mounted () {
    this.inquireViewrecord()
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
};
</script>

<style lang="stylus" scoped>
  @import "../../assets/styles/filmdetails.styls"
  >>>.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover
    background-color: #f8f4ec
    color: #FDB515
</style>
