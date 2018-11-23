<template>
  <div class="comment-details">
    <film-header :title="title"></film-header>
    <film-text></film-text>
    <film-features></film-features>
  </div>
</template>

<script>
import FilmHeader from './components/FilmHeader'
import FilmText from './components/FilmText'
import FilmFeatures from './components/FilmFeatures'

export default {
  name: 'CommentDetails',
  components: {
    FilmHeader,
    FilmText,
    FilmFeatures
  },
  data () {
    return {
      title: '影评'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
