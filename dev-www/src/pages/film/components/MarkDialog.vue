<template>
  <transition name="dialog-fade">
    <div class="mark-dialog">
      <div class="dialog-box">
        <h3>
          <span v-show="!changeBox">看过</span>
          <div v-show="changeBox" class="change-box">
            <el-radio v-model="radio" label="1">想看</el-radio>
            <el-radio v-model="radio" label="2">看过</el-radio>
          </div>
        </h3>
        <span @click="changeState" class="change" v-show="!changeBox">修改</span>
        <el-rate
          v-show="radio=='2'"
          class="rating"
          v-model="rating"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <div class="input" v-show="radio=='2'">
          <el-input
          type="textarea"
          :rows="8"
          placeholder="快记下来，看完的感受吧( # ▽ # )"
          v-model="comment">
          </el-input>
        </div>
        <span v-if="rtype==1||rtype==2" class="delete" @click="deleteState">删除记录</span>
        <div class="operate">
          <div class="cancel" @click="cancel()">取消</div>
          <div class="confirm" @click="confirm()">确定</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MarkDialog',
  props: ['rtype'],
  data () {
    return {
      rating: null,
      comment: '',
      radio: '2',
      changeBox: false
    }
  },
  methods: {
    cancel () {
      this.$emit('openDialog', false)
      this.changeBox = false
    },
    changeState () {
      this.changeBox = true
    },
    confirm () {
      if (this.radio === '1') {
        this.$emit('rtype', 1)
        this.$emit('openDialog', false)
        return
      }
      this.$emit('rtype', 2)
      this.$emit('openDialog', false)
    },
    deleteState () {
      this.$emit('rtype', 0)
      this.$emit('openDialog', false)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  .change-box >>> .el-radio__input.is-checked+.el-radio__label
    color: #FDB515
  .change-box >>> .el-radio__input.is-checked .el-radio__inner
    border-color: #FDB515
    background: #FDB515
  .dialog-fade-enter-active
    animation: dialog-fadein .3s
    animation: dialog-zoomin .3s
  @keyframes dialog-fadein
    0%
      opacity: 0
    100%
      opacity: 1
  @keyframes dialog-zoomin
    0%
      transform: scale(0)
    50%
      transform: scale(1.1)
    100%
      transform: scale(1)
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
      .change
        position: absolute
        top: .3rem
        right: .3rem
        padding: .1rem
        border-radius: .5rem
        font-size: .24rem
        background: #FDB515
        color: #fff
      h3
        margin: .4rem .3rem .2rem
        font-size: .34rem
        font-weight: bold
        color: #2d445c
      .rating
        margin: .3rem
      .input
        margin: .2rem .3rem 0 .2rem
      .delete
        float: right
        margin: .3rem
        font-size: .24rem
        color: #f56c6c
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
          border-top: .02rem solid #FDB575
          border-bottom-right-radius: .2rem
          background: #FDB515
          color: #fff
        .cancel
          border-top: .02rem solid #FDB515
          color: #FDB515
</style>
