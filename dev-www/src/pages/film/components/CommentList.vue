<template>
  <div class="comment-list">
    <div class="comment-box" v-for="(item,index) of list" :key="item._id">
      <div class="user-detail">
        <img class="img" src='../../../../src/assets/img/lightning.png'>
        <span class="name">{{item.publisher}}{{item.publisher==$store.state.username?'(我)':''}}</span>
        <span class="time">{{item.create_time|moment("from")}}</span>
        <span class="time" v-show="item.publisher==$store.state.username" @click="deleteMyComment(item._id,index)">删除</span>
      </div>
      <div class="comment">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import { inquireComments, deleteComment } from '../../../api/comments'
export default {
  name: 'CommentList',
  props: ['newComment'],
  data () {
    return {
      list: []
    }
  },
  methods: {
    deleteMyComment (id,index) {
      deleteComment(id)
      this.list.splice(index,1)
      this.$message({
        message: '删除成功！',
        type: 'success'
      })
      this.$emit('commentcount', this.list.length)
    }
  },
  watch:{
    'newComment': function(){
      this.list.push(this.$props.newComment)
      this.$emit('commentcount', this.list.length)
    }
  },
  mounted () {
    inquireComments(null,this.$route.query.id).then((res)=>{
      this.list = res.data
      this.$emit('commentcount', this.list.length)
    })
  }
};
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
          // background: #333
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
