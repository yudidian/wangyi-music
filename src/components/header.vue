<template>
  <div class="container">
    <div class="header" @click="changeColor">
      <div class="header-left"></div>
      <div class="header-title">网易云音乐</div>
      <div class="header-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      index: 1,
      theme: ['theme', 'theme1', 'theme2']
    }
  },
  methods: {
    changeColor () {
      if (this.index >= this.theme.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.theme[this.index])
      this.index++
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/css/variable.scss';
@import "~@/assets/css/mixin.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  @include bg_color();

  .header-left {
    width: 84px;
    height: 84px;
    @include bg_img('~@/assets/images/account')
  }

  .header-title {
    font-size: $font_title;
    color: #dddddd;
  }

  .header-right {
    width: 84px;
    height: 84px;
    @include bg_img('~@/assets/images/account')
  }
}
</style>
