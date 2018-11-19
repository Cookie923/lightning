<template>
  <div>
    搜索
    <bottom-tab class="bottom-tab"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '.././components/BottomTab'
export default {
  name: 'Search',
  components: {
    BottomTab
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .bottom-tab
    position: fixed
    overflow: hidden
    bottom: 0
    width: 100%
    z-index: 1
    border-top: .01rem solid #f8f8f8
    background: #fff
</style>
