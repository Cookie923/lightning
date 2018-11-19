<template>
  <div class="bottom-tab">
    <router-link to='/'>
      <div class="tab-item">
        <span class="iconfont">&#xe634;</span>
        <span class="tab-title">热门</span>
      </div>
    </router-link>
    <router-link to='/search'>
      <div class="tab-item">
        <span class="iconfont">&#xe70e;</span>
        <span class="tab-title">发现</span>
      </div>
    </router-link>
    <div class="tab-item">
      <span class="iconfont">&#xe6bd;</span>
      <span class="tab-title">动态</span>
    </div>
    <div class="tab-item">
      <span class="iconfont acount">&#xe783;</span>
      <span class="tab-title">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomTab',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .bottom-tab
    display: flex
    height: .9rem
    .tab-item
      display: flex
      width: 1.8rem
      flex-flow: column
      text-align: center
      color: #2D445C
      .iconfont
        font-size: .55rem
      .acount
        height: .47rem
        padding-top: .08rem
        font-size: .40rem
      .tab-title
        font-size: .25rem
    .tab-item-active
      color: #FDB515
</style>
