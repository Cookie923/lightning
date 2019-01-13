<template>
  <div class="film-text">
    <!-- 影讯/影评标题 -->
    <h3 v-if="detail">{{detail.title}}</h3>
    <h3 v-if="review">{{review.title}}</h3>
    <!-- 文章信息 -->
    <div class="resource">
      <div v-if="detail">
        来源：
        <a :href="detail.url">{{detail.source}}</a>
        {{detail.time}}
      </div>
      <div class="review-user" v-if="review">
        <img :src="review.author&&review.author.avatar">
        <a :href="review.alt">{{review.author&&review.author.name}}</a>
        <span class="status">看过</span>
        <el-rate
          class="rate-box"
          v-model="review.rating.value"
          disabled
          show-score
          text-color="#ff9900"
          >
        </el-rate>
        <span class="time">{{review.updated_at}}</span>
      </div>
      <div>
        <i class="iconfont">&#xe71f;</i>
      </div>
    </div>
    <div class="comment-text" v-if="detail">
      <img v-if="detail.images" :src="detail.images && detail.images[1].url1">
      <p v-html="detail.content"></p>
      (编辑：{{detail.editor}})
    </div>

    <div class="comment-text" v-if="review">
      <p class="desc" v-html="review.content"></p>
      <p class="author">以上内容来源于豆瓣，版权归{{review.author&&review.author.name}}所有，任何形式转载请联系作者</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmText',
  props: ['detail', 'review'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  .film-text
    padding: .2rem
    color: #2D445C
    margin-top: .74rem
    margin-bottom: .6rem
    h3
      margin-bottom: .1rem
      font-size: .35rem
      line-height: .4rem
      font-weight: bold
   .resource
      display: flex
      justify-content: space-between
      align-items: center
      font-size: .25rem
      .review-user
        height: 1rem
        .status
          color: #777
          font-size: .2rem
          margin-right: .1rem
        .rate-box
          display: inline-block
          line-height: .2rem
        img
          width: .6rem
          height: .6rem
          border-radius: .6rem
          border: .05rem solid #f8f8f8
        .time
          display: block
          margin-left: .8rem
          font-size: .2rem
      a
        margin-right: .2rem
      .iconfont
        color: #2D445C
        // color: #FDB515
        font-size: .5rem
  .comment-text
    line-height: .5rem
    .desc
      margin-top: .1rem
      white-space: pre-wrap
      font-size: .25rem
    .author
      margin-top: .3rem
      font-size: .2rem
      color: #FDB515
    img
      width: 100%
</style>

<style lang="stylus">
  .comment-text p
    img
      width: 100%
    b
      font-weight: bold
    video
      width: 100%
    p
      font-size: .23rem
</style>
