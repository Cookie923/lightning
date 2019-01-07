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
  methods: {
    // 视频有防盗链处理 所以暂时删除video标签
    videoRemove () {
      var pattern = /<video\s+[^>]*><\/video>/
      this.newsInfo.content = this.newsInfo.content.replace(pattern, '')
    }
  },
  mounted () {
    getNewsDetails(this.id).then((res) => {
      this.newsInfo = res
      this.videoRemove()
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
