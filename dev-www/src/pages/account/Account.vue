<template>
  <div>
    用户账号
    <bottom-tab :tab="tab"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from '.././components/BottomTab'
export default {
  name: 'Account',
  components: {
    BottomTab
  },
  data () {
    return {
      tab: 4,
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>
