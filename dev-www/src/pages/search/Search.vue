<template>
  <div class="search">
    <div class="search-input">
      <el-input
        placeholder="电影 / 影人"
        prefix-icon="el-icon-search">
      </el-input>
    </div>
    <billboard :billboard="weeklyList"></billboard>
    <billboard :billboard="usBillboard"></billboard>
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '.././components/BottomTab'
import Billboard from './components/Billboard'
import { weeklyBillboard, usBillboard } from '../../api/billboard'
export default {
  name: 'Search',
  components: {
    BottomTab,
    Billboard
  },
  data () {
    return {
      tab: 2,
      weeklyList: {},
      usBillboard: {}
    }
  },
  mounted () {
    weeklyBillboard().then((res) => {
      this.weeklyList = res
    })
    usBillboard().then((res) => {
      this.usBillboard = res
    })
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
