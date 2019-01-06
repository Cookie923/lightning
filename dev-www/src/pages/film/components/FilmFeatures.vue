<template>
  <div class="film-features">
    <div class="input">
      <el-input v-model="input" placeholder="输入评论"></el-input>
    </div>
    <div class="features">
      <span class="iconfont">&#xe71b;</span>8
      <span class="iconfont">&#xe66b;</span>12
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmFeatures',
  data () {
    return {
      input: ''
    }
  }
}
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
      .iconfont
        font-size: .45rem
        margin-left: .1rem
</style>
