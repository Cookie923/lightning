<template>
  <div class="header">
    <span class="iconfont" @click="back()">&#xe7eb;</span>
    <span>{{title}}</span>
    <el-dropdown trigger="click">
      <span class="iconfont">&#xe632;</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <i class="iconfont">&#xe652;</i>微信</el-dropdown-item>
        <el-dropdown-item>
          <i class="iconfont">&#xe655;</i>朋友圈</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'FilmHeader',
  props: ['title'],
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  >>>.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover
    background-color: #f8f4ec
    color: #FDB515
  .header
    display: flex
    justify-content: space-between
    position: fixed
    top: 0
    box-sizing: border-box
    width: 100%
    height: .74rem
    padding: 0 .1rem
    border: 0
    background: #f8f8f8
    text-align: center
    font-size: .35rem
    color: #2D445C
    line-height: .74rem
    .iconfont
      font-size: .4rem
      color: #2D445C
</style>
