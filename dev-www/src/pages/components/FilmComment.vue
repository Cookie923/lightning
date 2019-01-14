<template>
  <div class="film-comment">
    <!-- 首页热门影评 -->
    <div class="comment comment-hot" v-if="comment" v-for="item in comment" :key="item.reviews[0].id" @click="jumpToDetails(item.reviews[0].id)">
      <div class="comment-details">
        <div class="user">
          <img class="user-img" :src="item.reviews[0].author.avatar">
          {{item.reviews[0].author.name}}
          <span class="source">《{{item.subject.title}}》的影评</span>
        </div>
        <div class="comment-text">
          <h3 class="comment-title">{{item.reviews&&item.reviews[0].title}}</h3>
          <div>{{item.reviews&&item.reviews[0].summary}}</div>
        </div>
        <div class="comment-data">
          <span class="iconfont">&#xe71b;</span>8
          <span class="iconfont">&#xe66b;</span>12
        </div>
      </div>
    </div>
    <!-- 电影页热门影评 -->
    <div class="comment" v-if="comments" v-for="item in comments" :key="item.id" @click="jumpToDetails(item.id)">
      <div class="comment-details">
        <div class="user">
          <img class="user-img" :src="item.author.avatar">
          {{item.author.name}}
          <el-rate
            class="rate-box"
            v-model="item.rating.value"
            disabled
            text-color="#ff9900"
            >
          </el-rate>
        </div>
        <div class="comment-text">
          <p class="comment-title">{{item.title}}</p>
          <div>{{item.summary}}</div>
        </div>
      </div>
    </div>
    <div v-if="comments" class="comment-num">该片豆瓣前十热门影评</div>
  </div>
</template>

<script>
export default {
  name: 'FilmComment',
  props: ['comment', 'comments', 'commentnum'],
  data () {
    return {}
  },
  methods: {
    jumpToDetails (id) {
      this.$router.push(`/comment-details?id=${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styls'
  .film-comment
    margin: .1rem
    .comment.comment-hot
      height: 3rem
    .comment
      display: flex
      justify-content: space-between
      border-bottom: .03rem solid #f8f8f8
      .comment-details
        margin: .2rem
        .user
          width: 100%
          height: .5rem
          line-height: .5rem
          font-size: .26rem
          .user-img
            float: left
            width: .5rem
            height: .5rem
            border-radius: .5rem
            border: .01rem solid #f8f8f8
            margin-right: .1rem
          .source
            position: absolute
            right: 0
            padding-right: .1rem
            padding-left: .1rem
            background: #FDB515
            opacity: 0.7
            border-top-left-radius: .3rem
            border-bottom-left-radius: .3rem
            font-size: .2rem
            color: #fff
        .rate-box
          display: inline-block
          margin-left: .3rem
      .comment-title
        margin: .2rem 0
        font-size: .28rem
        font-weight: bold
        ellipsis()
      .comment-text
        height: 50%
        line-height: .34rem
        div
          font-size: .23rem
          line-height: .3rem
          color: #777
          ellipsis2()
      .comment-data
        margin-top: .4rem
        float: right
  .comment-num
    margin-top: .2rem
    text-align: center
    font-size: .25rem
    color: #FDB515
  .comment:last-child
    margin-bottom: .9rem
</style>
