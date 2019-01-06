<template>
  <div class="film-text">
    <h3>{{detail.title}}</h3>
    <div class="resource">
      <div>
        来源：
        <a :href="detail.url">{{detail.source}}</a>
        {{detail.time}}
      </div>
      <div>
        <i class="iconfont">&#xe71f;</i>
      </div>
    </div>
    <div class="comment-text">
      <p v-html="detail.content"></p>
      (编辑：{{detail.editor}})
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmText',
  props: ['detail'],
  data () {
    return {
    }
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
      a
        margin-right: .2rem
      .iconfont
        color: #2D445C
        // color: #FDB515
        font-size: .5rem
  .comment-text
    line-height: .5rem
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
