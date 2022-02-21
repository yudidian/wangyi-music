<template>
  <div class="container">
    <div class="tab">
      <div class="tab-item">
        <span>
          <router-link to="/recommend">推荐</router-link>
        </span>
      </div>
      <div class="tab-item">
        <span><router-link to="/ranking">排行</router-link></span>
      </div>
      <div class="tab-item">
        <span><router-link to="/singer">歌手</router-link></span>
      </div>
      <div class="tab-item">
        <span><router-link to="/search">搜索</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Taber'
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/mixin.scss";

.tab {
  width: 100%;
  height: 70px;
  @include bg_sub_color();
  display: flex;
  justify-content: space-around;
  align-items: center;

  .tab-item {
    width: 25%;
    height: 50px;
    text-align: center;
    line-height: 50px;

    span {
      @include font_color();

      a {
        @include font_color();

        &.router-link-active {
          border-bottom: solid 2px;
          padding-bottom: 10px;
          @include border_color();
        }
      }
    }
  }
}
</style>
