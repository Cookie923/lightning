<template>
  <transition name="dialog-fade">
    <div class="mark-dialog">
      <div class="dialog-box">
        <h3>看过</h3>
        <el-rate
          class="rating"
          v-model="rating"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <div class="input">
          <el-input
          type="textarea"
          :rows="8"
          placeholder="快记下来，看完的感受吧( # ▽ # )"
          v-model="comment">
          </el-input>
        </div>
        <div class="operate">
          <div class="cancel">取消</div>
          <div class="confirm">确定</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MarkDialog',
  data () {
    return {
      rating: null,
      comment: ''
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  // .dialog-fade-enter-active
  //   animation: confirm-fadein 0.3s
      // .confirm-content
      //   animation: confirm-zoom 0.3s
  .input >>> .el-textarea__inner
    font-size: .24rem
  .mark-dialog
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 100
    background: rgba(16, 16, 17, 0.6)
    .dialog-box
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      width: 75%
      height: 50%
      // border: .01rem solid #FDB515
      border-radius: .2rem
      background: #f8f8f8
      box-shadow: .05rem .05rem 1rem #000
      h3
        margin: .4rem .3rem .2rem
        font-size: .34rem
        font-weight: bold
        color: #2d445c
      .rating
        margin: .3rem
      .input
        margin: .2rem .3rem 0 .2rem
      .operate
        position:absolute
        bottom: 0
        left: 0
        right: 0
        display: flex
        flex-direction: row
        div
          flex-grow: 1
          text-align: center
          line-height: .7rem
          font-weight: bold
        .confirm
          border-top: .02rem solid #FDB515
          border-bottom-right-radius: .2rem
          background: #FDB515
          color: #fff
        .cancel
          border-top: .02rem solid #FDB515
          color: #FDB515
  // @keyframes confirm-fadein
  //   0%
  //     opacity: 0
  //   100%
  //     opacity: 1

  // @keyframes confirm-zoom
  //   0%
  //     transform: scale(0)
  //   50%
  //     transform: scale(1.1)
  //   100%
  //     transform: scale(1)
</style>
