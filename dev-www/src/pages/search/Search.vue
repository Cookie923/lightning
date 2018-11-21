<template>
  <div class="search">
    <div class="search-input">
      <el-input
        placeholder="电影 / 影人"
        prefix-icon="el-icon-search">
      </el-input>
    </div>
    <billboard></billboard>
    <billboard></billboard>
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '.././components/BottomTab'
import Billboard from './components/Billboard'
export default {
  name: 'Search',
  components: {
    BottomTab,
    Billboard
  },
  data () {
    return {
      tab: 2
    }
  }
}
</script>

<style lang="stylus" scoped>
  >>>.el-input__inner
    border: 0
    border-radius: .5rem
  .search
    .search-input
      padding: .15rem .15rem
      background: #FDB515
</style>
