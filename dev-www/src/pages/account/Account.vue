<template>
  <div class="account">
    <div class="user">
      <div class="user-img"></div>
      <div class="user-name">用户名</div>
    </div>
    <div class="title">
      观影记录
      <el-switch
        class="switch"
        v-model="value"
        active-text="看过"
        active-color="#FDB515"
        inactive-text="想看"
        inactive-color="#FDB515">
      </el-switch>
    </div>
    <film-gallery :tab="tab"></film-gallery>
    <div class="title">我的收藏</div>
    <div class="title">我的影评</div>
    <bottom-tab :tab="tab"></bottom-tab>
    <div class="button-box">
      <el-button class="button" type="warning" round>修改密码</el-button>
      <el-button class="button" type="warning" round>退出登录</el-button>
    </div>
  </div>
</template>

<script>
import FilmGallery from '.././components/FilmGallery'
import BottomTab from '.././components/BottomTab'
export default {
  name: 'Account',
  components: {
    FilmGallery,
    BottomTab
  },
  data () {
    return {
      tab: 4,
      value: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  >>>.el-switch__label.is-active
    color: #FDB515
  >>>.el-switch__label span
    font-size: .23rem
  .account
    .user
      display: flex
      justify-content: center
      align-items: center
      height: 3.4rem
      border: .05rem solid #FDB515
      background: #FDB515
      .user-img
        width: 2rem
        height: 2rem
        border-radius: 2rem
        background: #f8f8f8
      .user-name
        position: absolute
        margin-top: 1.3rem
        color: #fff
        font-size: .3rem
        font-weight: bold
    .title
      height: .74rem
      margin: .15rem 0
      padding: 0 .1rem
      background: #f8f8f8
      text-align: center
      font-size: .27rem
      color: #2D445C
      line-height: .74rem
      .switch
        hidden: overflow
        position: absolute
        right: 0.1rem
        margin-top: .15rem
    .button-box
      width: 100%
      .button
        display: block
        margin: 0.1rem auto
</style>
