<template>
  <div class="news-details">
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
  name: 'NewsDetails',
  components: {
    FilmHeader,
    FilmText,
    FilmFeatures
  },
  data () {
    return {
      title: '影讯'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
