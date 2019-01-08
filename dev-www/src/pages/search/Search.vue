<template>
  <div class="search">
    <div class="search-input">
      <el-input
        placeholder="电影 / 影人"
        prefix-icon="el-icon-search"
        v-model="query">
      </el-input>
      <i v-show="query" class="delete-button el-icon-delete" @click="clear()"></i>
    </div>
    <search-details :searchResult="searchMsg" v-show="query"></search-details>
    <billboard v-show="!query" :billboard="weeklyList"></billboard>
    <billboard v-show="!query" :billboard="usBillboard"></billboard>
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '.././components/BottomTab'
import Billboard from './components/Billboard'
import SearchDetails from './components/SearchDetails'
import { weeklyBillboard, usBillboard } from '../../api/billboard'
import { searchFilms } from '../../api/film-search'
export default {
  name: 'Search',
  components: {
    BottomTab,
    Billboard,
    SearchDetails
  },
  data () {
    return {
      tab: 2,
      weeklyList: {},
      usBillboard: {},
      query: '',
      searchMsg: {}
    }
  },
  watch: {
    query (newQuery) {
      this.searchAllFilm(newQuery)
    }
  },
  methods: {
    searchAllFilm (query) {
      searchFilms(query).then((res) => {
        this.searchMsg = res
      })
    },
    clear () {
      this.query = ''
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
      caret-color: #FDB515
      .delete-button
        position: absolute
        right: .4rem
        top: .4rem
        color: #FDB515
</style>
