<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button type="button" @click="doCopy">Copy!</button>
    <div class="box">
      xxx
    </div>
    <van-button type="primary">主要按钮</van-button>
    <span>{{1 | userStatus}}</span>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      message: 'message1',
    }
  },
  components: {
  },
  mounted () {
    console.log('env', this.config.env)
  },
  methods: {
    doCopy () {
      this.$copyText(this.message).then(function (e) {
        console.log('Copied', e)
      }, function (e) {
        console.log('Can not copy', e)
      })
    },
  },
}
</script>
<style lang="less">
.home{
  .box{
    width: 750px;
    height: 30px;
  }
}

</style>
