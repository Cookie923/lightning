<template>
  <div class="billboard">
    <div class="title">
      <h3>{{billboard.title}}</h3>
      <span @click="jumpToList()">全部{{billboard.subjects&&billboard.subjects.length}}部</span>
    </div>
    <div class="gallery">
      <div class="film" @click="jumpToDetail(billboard.subjects[0].subject.id)">
        <img :src="billboard.subjects&&billboard.subjects[0].subject.images.small">
        <div class="film-name-box">
          <i class="iconfont">&#xe62c;</i>
          <span class="film-name">{{billboard.subjects&&billboard.subjects[0].subject.title}}</span>
        </div>
      </div>
      <div class="film" @click="jumpToDetail(billboard.subjects[1].subject.id)">
        <img :src="billboard.subjects&&billboard.subjects[1].subject.images.small">
        <div class="film-name-box">
          <i class="iconfont">&#xe62d;</i>
          <span class="film-name">{{billboard.subjects&&billboard.subjects[1].subject.title}}</span>
        </div>
      </div>
      <div class="film"  @click="jumpToDetail(billboard.subjects[2].subject.id)">
        <img :src="billboard.subjects&&billboard.subjects[2].subject.images.small">
        <div class="film-name-box">
          <i class="iconfont">&#xe630;</i>
          <span class="film-name">{{billboard.subjects&&billboard.subjects[2].subject.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Billboard',
  props: ['billboard'],
  data () {
    return {
    }
  },
  methods: {
    jumpToList () {
      this.$router.push('/search/billboardlist')
    },
    jumpToDetail (id) {
      this.$router.push({
        path: `/film-details?id=${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .billboard
    margin: .3rem 0
    padding: .2rem .15rem
    .title
      display: flex
      align-items: center
      margin-bottom: .3rem
      h3
        font-size: .35rem
        font-weight: bold
      span
        margin-left: .3rem
        font-size: .25rem
    .gallery
      display: flex
      .film
        padding: .15rem
        img
          width: 2rem
          height: 2.8rem
          border-radius: .1rem
        .film-name-box
          margin-top: .15rem
          color: #333
        .film-name
          font-size: .2rem
</style>
