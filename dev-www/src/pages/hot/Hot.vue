<template>
  <div>
    <header class="title">
      <span class="iconfont">&#xe63c;</span>
        Lighting
    </header>
    <el-carousel trigger="click" height="4rem">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="news-title">
          <h3>影讯标题{{ item }}</h3>
          <span>小标题电影资讯内容概述</span>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="title title-text">院线热映</div>
    <div class="theatre">
      要写一个组件
    </div>
    <div class="title title-text comment">热门影评</div>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
  .title
    height: .74rem
    padding: 0 .1rem
    background: #f8f8f8
    text-align: center
    font-size: .4rem
    color: #2D445C
    line-height: .74rem
    .iconfont
      float: left
      font-size: .4rem
      color: #2D445C
  .el-carousel__item h3 
    color: #475669;
    font-size: .3rem;
    opacity: 0.75;
    line-height: .7rem;
    margin: 0;
  .news-title
    margin-top: 2.5rem
    margin-left: .2rem
  .el-carousel__item:nth-child(2n) 
     background-color: #99a9bf;
  
  .el-carousel__item:nth-child(2n+1) 
     background-color: #d3dce6;
  .title-text
    font-size: .35rem
    font-weight: bold
  .comment
    text-align: left
  .theatre
    height: 3.5rem
</style>
