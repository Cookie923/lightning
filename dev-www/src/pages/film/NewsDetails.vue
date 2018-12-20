<template>
  <div class="news-details">
    <film-header :title="title"></film-header>
    <film-text :detail="newsInfo"></film-text>
    <comment-list></comment-list>
    <film-features></film-features>
  </div>
</template>

<script>
import FilmHeader from './components/FilmHeader'
import FilmText from './components/FilmText'
import FilmFeatures from './components/FilmFeatures'
import CommentList from './components/CommentList'
import { getNewsDetails } from '../../api/film-news'

export default {
  name: 'NewsDetails',
  components: {
    FilmHeader,
    FilmText,
    FilmFeatures,
    CommentList
  },
  data () {
    return {
      title: '影讯',
      id: this.$route.query.id,
      newsInfo: {}// 影讯详情
    }
  },
  mounted () {
    getNewsDetails(this.id).then((res) => {
      this.newsInfo = res
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
