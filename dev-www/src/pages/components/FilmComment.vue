<template>
  <div class="film-comment">
    <div class="comment" v-for="item in comment" :key="item.reviews[0].id" @click="jumpToDetails(item.reviews[0].id)">
      <div class="comment-details">
        <div class="user">
          <img class="user-img" :src="item.reviews[0].author.avatar">
          {{item.reviews[0].author.name}}
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
  </div>
</template>

<script>
export default {
  name: 'FilmComment',
  props: ['comment'],
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
    .comment
      display: flex
      height: 2.8rem
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
      .comment-title
        margin: .2rem 0
        font-size: .28rem
        font-weight: bold
        ellipsis()
      .comment-text
        height: 50%
        div
          font-size: .23rem
          line-height: .3rem
          color: #777
          ellipsis2()
      .comment-data
        margin-top: .3rem
        float: right
  .comment:last-child
    margin-bottom: .9rem
</style>
