<template>
  <div class="comment-details">
    <film-header :title="title"></film-header>
    <film-text :review="commentContent"></film-text>
    <comment-list></comment-list>
    <film-features></film-features>
  </div>
</template>

<script>
import FilmHeader from './components/FilmHeader'
import FilmText from './components/FilmText'
import FilmFeatures from './components/FilmFeatures'
import CommentList from './components/CommentList'
import { getReviewDetail } from '../../api/film-in-theaters'

export default {
  name: 'CommentDetails',
  components: {
    FilmHeader,
    FilmText,
    FilmFeatures,
    CommentList
  },
  data () {
    return {
      title: '影评',
      collected: '',
      commentContent: {}
    }
  },
  mounted () {
    getReviewDetail(this.$route.query.id).then((res) => {
      this.commentContent = res
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
