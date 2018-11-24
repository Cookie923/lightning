<template>
  <div class="billboard">
    <div class="title">
      <h3>榜单名称</h3>
      <span @click="jumpToList()">全部100部</span>
    </div>
    <div class="gallery">
      <router-link to="/film-details">
        <div class="film">
          <img src="http://img5.mtime.cn/mt/2018/10/17/085012.20600355_100X140X4.jpg">
          <div class="film-name-box">
            <i class="iconfont">&#xe62c;</i>
            <span class="film-name">毒液：致命守护者</span>
          </div>
        </div>
      </router-link>
      <router-link to="/film-details">
        <div class="film">
          <img src="http://img5.mtime.cn/mt/2018/10/17/085012.20600355_100X140X4.jpg">
          <div class="film-name-box">
            <i class="iconfont">&#xe62d;</i>
            <span class="film-name">毒液：致命守护者</span>
          </div>
        </div>
      </router-link>
      <router-link to="/film-details">
        <div class="film">
          <img src="http://img5.mtime.cn/mt/2018/10/17/085012.20600355_100X140X4.jpg">
          <div class="film-name-box">
            <i class="iconfont">&#xe630;</i>
            <span class="film-name">毒液：致命守护者</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Billboard',
  data () {
    return {
    }
  },
  methods: {
    jumpToList () {
      this.$router.push('/search/billboardlist')
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
