<template>
  <div>
    动态
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '.././components/BottomTab'
export default {
  name: 'Activity',
  components: {
    BottomTab
  },
  data () {
    return {
      tab: 3,
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>
