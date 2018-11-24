<template>
  <div class="film-list">
    <div class="film-item" v-for="item of 4" :key="item" @click="back()">
      <div class="film-img"></div>
      <div class="film-info">
        <h3>我不是药神</h3>
        <div class="score">
          <span>豆瓣：8.1</span>
          <span>IMDb：7.7</span>
        </div>
        <div class="details">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolores, blanditiis. Ex animi rerum tempor.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmItem',
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.push('/film-details')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .film-list
    margin: .84rem .1rem
    .film-item
      display: flex
      padding: .1rem
      .film-img
        flex-shrink: 0
        hidden: overflow
        width: 1.8rem
        height: 2.52rem
        border-radius: .1rem
        background: #333
        margin: .3rem
      .film-info
       
        margin-top: .3rem
        h3
          margin-top: .2rem
          font-size: .35rem
          font-weight: bold
        .score
          margin-top: .2rem
          span
            margin-right: .2rem
        .details
          margin-top: .1rem
</style>

