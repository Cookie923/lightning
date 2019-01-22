<template>
  <div class="film-features">
    <div class="input">
      <el-input v-model="input" placeholder="输入评论"></el-input>
    </div>
    <div class="features">
      <span v-show="!input" class="iconfont">&#xe66b;</span>
      <span v-show="!input">{{commentcounts}}</span>
      <div class="button" v-show="input" @click="addComments('news')">发送</div>
    </div>
  </div>
</template>

<script>
import { addComment } from '../../../api/comments'

export default {
  name: 'FilmFeatures',
  props: ['commentcounts'],
  data () {
    return {
      input: ''
    }
  },
  methods:{
    addComments (type) {
      if(type == 'news') {
        const aid = this.$route.query.id
        let publisher = this.$store.state.username
        addComment(null,publisher,type,aid,null,this.input).then((res) => {
          this.input = ''
          this.$message({
            message: '评论成功！',
            type: 'success'
          })
          this.$emit('setComment', res)
        })
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  .input>>>.el-input__inner
    height: .6rem
  .film-features
    display: flex
    align-items: center
    height: .6rem
    padding: .1rem
    position: fixed
    overflow: hidden
    bottom: 0
    width: 100%
    z-index: 1
    border-top: .02rem solid #f8f8f8
    background: #fff
    .input
      width: 75%
    .features
      display: flex
      align-items: center
      width: 25%
      font-size: .3rem
      .button
        width: 1.4rem
        height: .5rem
        margin-left: .14rem
        border-radius: .08rem
        line-height: .5rem
        text-align: center
        color: #fff
        background: #FDB515
      .iconfont
        font-size: .45rem
        margin-left: .45rem
</style>
