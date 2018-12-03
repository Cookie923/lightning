<template>
  <div class="comment-list">
    <div class="comment-box" v-for="item of 8" :key="item">
      <div class="user-detail">
        <div class="img"></div>
        <span class="name">用户名1346</span>
        <span class="time">4小时前</span>
      </div>
      <div class="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam earum modi doloremque, laborum voluptas iste ex officiis, laudantium rem ipsa rerum! Enim nam inventore, beatae cupiditate vero, eaque impedit quos.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .comment-list
    margin-bottom: .9rem
    .comment-box
      padding: .2rem
      border-top: .02rem solid #f8f8f8
      .user-detail
        display: flex
        align-items: center
        font-size: .25rem
        color: #2D445C
        .img
          width: .7rem
          height: .7rem
          border-radius: .7rem
          background: #333
        .name
          margin-left: .2rem
        .time
          margin-left: .4rem
          font-size: .22rem
          color: #999
    .comment
      margin-top: .04rem
      margin-left: .9rem
      font-size: .27rem
</style>
