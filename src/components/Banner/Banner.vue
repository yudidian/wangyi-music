<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.targetId">
        <a :href="banner.url">
          <img :src="banner.pic" alt="image">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Banner',
  props: {
    banners: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  watch: {
    banners: {
      immediate: false,
      handler () {
        console.log(123)
        this.$nextTick(() => {
          console.log(321)
          /* eslint-disable no-new */
          new Swiper('.swiper-container', {
            observeParents: true,
            observe: true,
            loop: true,
            autoplay: true,
            direction: 'horizontal',
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="scss">
@import "~@/assets/css/mixin.scss";

.swiper-container {
  height: 320px;

   & ::v-deep .swiper-pagination {
    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      @include bg_sub_color();
    }
    &.swiper-pagination-bullet-active{
      @include bg_color();
    }
  }

  .swiper-wrapper {
    height: 320px;

    .swiper-slide {
      width: 100%;

      a {
        img {
          width: 100%;
          height: 320px;
        }
      }
    }
  }
}

</style>
