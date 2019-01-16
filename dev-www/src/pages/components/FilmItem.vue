<template>
  <div class="film-list">
    <!-- 电影榜单 -->
    <div
      v-if="!type"
      class="film-item" 
      v-for="film of (billboard&&billboard.subjects)" 
      :key="film.subject.id" 
      @click="back(film.subject.id)">
      <img class="film-img" v-lazy="replaceUrl(film.subject.images.small)"/>
      <div class="film-info">
        <h3>{{film.subject.title}}</h3>
        <div class="score">
          <span class="director">导演：{{film.subject.directors[0].name}}</span>
          <span class="director">
            <span class="douban">豆瓣</span>
            <span class="rate">{{film.subject.rating.average}}</span>
          </span>
        </div>
        <div class="details">
          <span>类型：</span>
          <span class="genres" v-for="genres of film.subject.genres" :key="genres.id">{{genres}}</span>
        </div>
        <div class="duration">
          <span>片长：{{film.subject.durations[0]}}</span>
        </div>
      </div>
      <div class="rank" :class="{'rank-one':film.rank==1,'rank-two':film.rank==2,'rank-three':film.rank==3}">No.{{film.rank}}</div>
    </div>
    <!-- 想看电影 -->
    <div
      v-if="type=='wanted'"
      class="film-item" 
      v-for="film of list" 
      :key="film.filmid" 
      @click="back(film.filmid)">
      <img class="film-img" v-lazy="replaceUrl(film.filminfo.images.small)"/>
      <div class="film-info">
        <h3>{{film.filminfo.title}}</h3>
        <div class="score">
          <span class="director">导演：{{film.filminfo.directors[0].name}}</span>
          <span class="director">
            <span class="douban">豆瓣</span>
            <span class="rate">{{film.filminfo.rating.average}}</span>
          </span>
        </div>
        <div class="details">
          <span>类型：</span>
          <span class="genres" v-for="genres of film.filminfo.genres" :key="genres.id">{{genres}}</span>
        </div>
        <div class="duration">
          <span>片长：{{film.filminfo.durations[0]}}</span>
        </div>
        <div class="comment" v-if="type=='wanted'">
          <span class="create-time">{{film.create_time}}</span>
        </div>
      </div>
    </div>
    <!-- 看过电影 -->
    <div
      v-if="type=='watched'"
      class="film-item" 
      v-for="film of list" 
      :key="film.filmid" 
      @click="back(film.filmid)">
      <img class="film-img" v-lazy="replaceUrl(film.filminfo.images.small)"/>
      <div class="film-info">
        <h3>{{film.filminfo.title}}</h3>
        <div class="score">
          <span class="director">导演：{{film.filminfo.directors[0].name}}</span>
          <span class="director">
            <span class="douban">豆瓣</span>
            <span class="rate">{{film.filminfo.rating.average}}</span>
          </span>
        </div>
        <div class="details">
          <span>类型：</span>
          <span class="genres" v-for="genres of film.filminfo.genres" :key="genres.id">{{genres}}</span>
        </div>
        <div class="duration">
          <span>片长：{{film.filminfo.durations[0]}}</span>
        </div>
        <div class="comment" v-if="type=='watched'">
          <div class="rate-box">
            <el-rate
            v-model="film.rating"
            disabled
            text-color="#ff9900"
            >
            </el-rate>
          </div>
          <span class="create-time">{{film.create_time}}</span>
          <p>{{film.comment}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmItem',
  props: ['billboard', 'list'],
  data () {
    return {
      type: this.$route.query.type,
    }
  },
  methods: {
    back (id) {
      this.$router.push({
        path: `/film-details?id=${id}`
      })
    },
    replaceUrl (srcUrl) {
      if (srcUrl !== undefined) { // 图片防盗链处理
        return ('https://images.weserv.nl/?url=' + srcUrl.replace(/http\w{0,1}:\/\//, ''))
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  >>> .el-rate__icon
    font-size: .2rem 
  .film-list
    margin: .84rem .1rem
    .film-item
      display: flex
      padding: .1rem
      border-bottom: .08rem dotted #f8f8f8
      .film-img
        flex-shrink: 0
        hidden: overflow
        width: 1.8rem
        height: 2.52rem
        border-radius: .1rem
        background: #333
        margin: .3rem
      .film-info
        margin-top: .3rem
        h3
          margin-top: .2rem
          font-size: .35rem
          font-weight: bold
        .score
          margin-top: .2rem
          .director
            font-size: .24rem
            .rate
              font-size: .4rem
              font-weight: bold
              color: #FDB515
          .douban
            background: #007722
            padding: .04rem
            border-radius: .05rem
            font-size: .2rem
            color: #fff
          span
            margin-right: .2rem
        .details
          margin-top: .1rem
          font-size: .24rem
          .genres
            margin-right: .1rem
        .duration
          margin-top: .1rem
          font-size: .24rem
      .rank
        position: absolute
        z-index: -1
        right: 0.2rem
        padding: .1rem
        border-radius: .1rem
        background: #ddd
        color: #fff
      .rank-one
        background: #e94f4f
      .rank-two
        background: #ef760c
      .rank-three
        background: #fced21
      .comment
        width: 4rem
        margin-top: .2rem
        padding: .1rem .1rem .2rem
        background: #fffafa
        border-radius: .1rem
        font-size: .24rem
        color: #777
        .rate-box
          width: 55%
          display: inline-block
        .create-time
          font-size: .2rem
</style>
