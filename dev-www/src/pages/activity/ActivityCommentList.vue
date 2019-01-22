<template>
  <div class="comment-list">
    <span v-show="!contrl" @click="contrlComment">评论</span>
    <div class="input" v-show="contrl">
      <el-input v-model="input" class="elinput" placeholder="输入评论"></el-input>
    </div>
    <div class="button" v-show="contrl" @click="cancel()">取消</div>
    <div class="button" v-show="contrl" @click="addComments('dynamic')">发送</div>
    <div class="comment-box" v-for="(item,index) of list" :key="item._id">
      <span>{{item.publisher}}{{item.publisher==$store.state.username?'(我)':''}}：</span>
      <span>{{item.content}}</span>
      <span class="comment-time">{{item.create_time|moment("from")}}</span>
      <span class="comment-time" v-show="item.publisher==$store.state.username" @click="deletemycomment(item._id,index)">删除</span>
    </div>
  </div>
</template>

<script>
import { inquireComments, addComment, deleteComment } from '../../api/comments'
export default {
  name: 'ActivityCommentList',
  props: ['infoname', 'infoid'],
  data () {
    return {
      input: '',
      contrl: false,
      list: []
    }
  },
  methods: {
    contrlComment () {
      this.contrl = true
    },
    cancel () {
      this.contrl = false
    },
    addComments (type) {
      let publisher = this.$store.state.username
      addComment(this.$props.infoname,publisher,type,null,this.$props.infoid,this.input).then((res)=>{
        this.list.push(res.data)
        this.input = ''
        this.contrl = false
      })
    },
    deletemycomment (id,index) {
      deleteComment(id)
      this.list.splice(index,1)
    }
  },
  mounted () {
    inquireComments(this.$props.infoname,null,this.$props.infoid).then((res)=>{
      this.list = res.data
    })
  }
};
</script>

<style lang="stylus" scoped>
  .input>>>.el-input__inner
    height: .4rem
    font-size: .2rem
  .comment-list
    margin-top: .1rem
    span
      color: #2D445C
    .input
      display: inline-block
      width: 4.8rem
      margin: .05rem
   .button
      float:right
      width: .7rem
      height: .4rem
      margin-top: .05rem
      margin-left: .1rem
      margin-right: .1rem
      border-radius: .08rem
      line-height: .4rem
      text-align: center
      color: #fff
      background: #FDB515
    .comment-box
      .comment-time
        margin-left: .1rem
        color: #777
        font-size: .1rem
</style>
