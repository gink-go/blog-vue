<template>
  <div class="home">
    <div class="home-bg"></div>
    <img src="../../assets/img/sign.png" class="logo">
    <div class="muen-container">
      <p class="acticle list" @click="$router.push({path:'/core'})"></p>
      <p class="about list" @click="$router.push({path:'/about'})"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixins.styl"
  .home-bg
    position fixed
    width 1920px
    height 1007px
    background url("../../assets/img/home-ng.png") no-repeat center center;
    z-index -1

  .logo
    flex-center()
    padding-top 170px
    margin: 0 auto;
    width: 495px
    height: 209px

  .muen-container
    flex-between()
    margin 170px auto 0 auto
    width 624px
    height 51px
    .list
      width 163px
      height 51px
      cursor pointer
      transition ease-in-out 150ms
    .acticle
      background url("../../assets/img/acticle.png") no-repeat 0 0
    .acticle:hover
      background url("../../assets/img/acticle-active.png") no-repeat 0 0
    .about
      background: url("../../assets/img/about.png") no-repeat 0 0
    .about:hover
      background: url("../../assets/img/about-active.png") no-repeat 0 0
</style>
