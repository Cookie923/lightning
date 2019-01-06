<template>
  <div class="film-comment">
    <div class="comment" v-for="item in 3" :key="item" @click="jumpToDetails()">
      <div class="comment-details">
        <div class="user">
          <div class="user-img"></div>
          用户名称
        </div>
        <div class="comment-text">
          <h3 class="comment-title">标题</h3>
          <span>简略内容影评</span>
        </div>
        <div class="comment-data">
          <span class="iconfont">&#xe71b;</span>8
          <span class="iconfont">&#xe66b;</span>12
        </div>
      </div>
      <div class="comment-image">
        <img src="">
        tu
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmComment',
  data () {
    return {}
  },
  methods: {
    jumpToDetails () {
      this.$router.push('/comment-details')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .film-comment
    margin: .1rem
    .comment
      display: flex
      height: 2.2rem
      justify-content: space-between
      border-bottom: .03rem solid #f8f8f8
      .comment-details
        margin: .2rem
        .user
          width: 100%
          height: .4rem
          line-height: .4rem
          font-size: .23rem
          .user-img
            float: left
            width: .4rem
            height: .4rem
            border-radius: .4rem
            margin-right: .1rem
            background: #333
      .comment-title
        margin: .1rem 0
        font-size: .28rem
        font-weight: bold
      .comment-text
        height: 50%
        span
          font-size: .25rem
      .comment-data
        position: relative
        bottom: 0
      .comment-image
        width: 2.4rem
        height: 1.6rem
        margin: .2rem
        border-radius: .1rem
        background: #333
  .comment:last-child
    margin-bottom: .9rem
</style>
